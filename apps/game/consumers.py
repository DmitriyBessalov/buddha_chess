import json
import ast
import asyncio
from random import randint

from django.contrib.auth.models import AnonymousUser

from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from apps.users.models import SocialUser
from rest_framework.authtoken.models import Token

import redis

r = redis.Redis(host='127.0.0.1', port=6379, db=1)


class StartGameConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.game_group_name = 'start_game'

        await self.channel_layer.group_add(
            self.game_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        if self.game_group_name == 'start_game':
            print(1)
            # await self.receive(self, '{"cmd": "show_games"}')

        # Leave game group
        # await self.channel_layer.group_discard(
        #     self.game_group_name,
        #     self.channel_name
        # )

    @database_sync_to_async
    def get_user(self, jwt):
        try:
            user = Token.objects.get(key=jwt)
            return SocialUser.objects.get(pk=user.user_id)
        except Token.DoesNotExist:
            return AnonymousUser()

    # Receive message from WebSocket
    async def receive(self, text_data):
        ws_json = json.loads(text_data)
        send_data = {"cmd": "error"}

        if self.scope["user"].username == "":
            if ws_json['jwt'] != None:
                self.scope['user'].username = await self.get_user(ws_json['jwt'])
            else:
                if ws_json['anonimous_jwt'] != None:
                    self.scope['user'].username = r.get('anonimous_' + ws_json['anonimous_jwt']).decode("utf-8")

            if self.scope["user"].username == "":
                self.scope["user"].username = "User_" + str(randint(10000, 99999))
                self.scope["user"].anonimous_jwt = str(randint(1000000000, 9999999999))
                send_data = {"cmd": "anonimous_login",
                             "anonimous_username": self.scope["user"].username,
                             "anonimous_jwt": self.scope["user"].anonimous_jwt
                             }
                r.set('anonimous_' + self.scope["user"].anonimous_jwt, self.scope["user"].username, ex=2635200)
                await self.send(text_data=json.dumps(send_data))

        if ws_json['cmd'] == 'create_game':
            game_id = randint(100000000, 999999999)
            r.set('game_' + str(game_id), str({
                "game_id": game_id,
                "chess_variant": ws_json['chess_variant'],
                "color": ws_json['color'],
                "user": self.scope["user"].username,
            }), ex=40)
            ws_json['cmd'] = "show_games"

        if ws_json['cmd'] == 'show_games':
            data = ''

            for key in r.keys('game_*'):
                f = ast.literal_eval(r.get(key).decode("utf-8"))
                # f['end_time'] = r.ttl(key)

                data = data + str(f) + ', '

            print(data)
            send_data = {"cmd": "list_games",
                         "list_games": ast.literal_eval(data)
                         }

        if ws_json['cmd'] == 'join_game':
            send_data = {"cmd": "rival",
                         "login": "str",
                         "chess_variant": "",
                         "rival_login": "",
                         "my_color": "",
                         }

        if ws_json['cmd'] == 'move':
            send_data = {"cmd": "move",
                         "num_move": "int",
                         "move": "",
                         "move_color": "",
                         "time": "",
                         }

        # Send message to game group
        await self.channel_layer.group_send(
            self.game_group_name,
            {'type': 'send_data', 'message': send_data}
        )

    # Receive message from game group
    async def send_data(self, event):
        # Send message to WebSocket
        print('SENT: ' + str(event['message']))

        await self.send(text_data=json.dumps(event['message']))
