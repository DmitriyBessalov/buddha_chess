import json
from random import randint

from django.contrib.auth.models import AnonymousUser

from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from apps.users.models import SocialUser
from rest_framework.authtoken.models import Token


class StartGameConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.game_group_name = 'start_game'

        await self.channel_layer.group_add(
            self.game_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave game group
        await self.channel_layer.group_discard(
            self.game_group_name,
            self.channel_name
        )

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
        data = {"cmd": "error"}
        if ws_json['cmd'] == 'show_games':
            # Получить Авторизацию
            self.scope['user'] = await self.get_user(ws_json['jwt'])
            # print(self.scope["user"].id)
            data = {"cmd": "list_game",
                    "list": {
                            "game_id": "1",
                            "chess_variant": "1",
                            "color": "while"
                        }
                    }

        if ws_json['cmd'] == 'create_game':
            game_id = randint(100000000, 999999999)
            data = {"cmd": "add_list_game",
                    "game_id": game_id,
                    "chess_variant": "",
                    "login": self.scope["user"].username,
                    "color": "char"
                    }

        if ws_json['cmd'] == 'join_game':
            data = {"cmd": "rival",
                    "login": "str",
                    "chess_variant": "",
                    "rival_login": "",
                    "my_color": "",
                    }

        if ws_json['cmd'] == 'move':
            data = {"cmd": "move",
                    "num_move": "int",
                    "move": "",
                    "move_color": "",
                    "time": "",
                    }

        # Send message to game group
        await self.channel_layer.group_send(
            self.game_group_name,
            {'type': 'send_data', 'message': data}
        )

    # Receive message from game group
    async def send_data(self, event):
        # Send message to WebSocket
        print('SENT: ' + event['message'])

        await self.send(text_data=json.dumps(event['message']))

