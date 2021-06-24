import json
import ast
import time
from random import randint

from django.contrib.auth.models import AnonymousUser

from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from apps.users.models import SocialUser
from rest_framework.authtoken.models import Token

import redis

r = redis.Redis(host='127.0.0.1', port=6379, db=1)


class StartGameConsumer(AsyncJsonWebsocketConsumer):

    async def connect(self):
        self.game_group_name = self.scope['query_string'].decode("utf-8")

        if self.game_group_name == "":
            self.game_group_name = 'start_game'

        await self.channel_layer.group_add(
            self.game_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        for key in r.keys('game_*'):
            k = ast.literal_eval(r.get(key).decode("utf-8"))
            if k['user'] == self.scope["user"].username:
                r.delete("game_" + str(k["game_id"]))
        await self.receive('{"cmd":"disconnect"}')


    @database_sync_to_async
    def get_user(self, jwt):
        try:
            user = Token.objects.get(key=jwt)
            return SocialUser.objects.get(pk=user.user_id)
        except Token.DoesNotExist:
            return AnonymousUser()

    # Receive message from WebSocket
    async def receive(self, text_data):
        print('GET: ' + text_data)
        ws_json = json.loads(text_data)
        if ws_json['cmd'] != 'disconnect':
            if self.scope["user"].username == "":
                if ws_json['jwt'] != "null" and ws_json['jwt'] != None:
                    self.scope['user'].username = await self.get_user(ws_json['jwt'])
                else:
                    if ws_json['anonimous_jwt'] != "null" and ws_json['anonimous_jwt'] != None:
                        self.scope['user'].username = r.get('anonimous_' + ws_json['anonimous_jwt']).decode("utf-8")

                if self.scope["user"].username == "":
                    self.scope["user"].username = "Anonim_" + str(randint(10000, 99999))
                    self.scope["user"].anonimous_jwt = str(randint(1000000000, 9999999999))
                    send_data = {"cmd": "anonimous_login",
                                 "anonimous_username": self.scope["user"].username,
                                 "anonimous_jwt": self.scope["user"].anonimous_jwt
                                 }
                    r.set('anonimous_' + self.scope["user"].anonimous_jwt, self.scope["user"].username, ex=550000)
                    await self.send(text_data=json.dumps(send_data))

        _send_data = {"cmd": "error"}

        if ws_json['cmd'] == 'create_game':
            game_id = randint(100000000, 999999999)
            if ws_json['color'] == "random":
                if randint(0, 1):
                    ws_json['color'] = "while"
                else:
                    ws_json['color'] = "black"

            r.set('game_' + str(game_id), json.dumps({
                "game_id": game_id,
                "chess_variant": ws_json['chess_variant'],
                "color": ws_json['color'],
                "position_960": ws_json['position_960'],
                "user": self.scope["user"].username,
            }), ex=600)
            ws_json['cmd'] = "show_games"

        if ws_json['cmd'] == 'join_game':
            game = r.get('game_' + str(ws_json['game_id']))
            game = ast.literal_eval(game.decode("utf-8"))

            if game['user'] != self.scope["user"].username:
                _send_data = {"cmd": "join_game",
                              "game_id": ws_json['game_id'],
                              "chess_variant": game["chess_variant"],
                              "position_960": game['position_960'],
                              "time_while": 2160,
                              "time_black": 2160,
                              "time_move_add": 5,
                              "time_start": time.time()
                              }

                if game['color'] == "wrile":
                    _send_data["rival_white"] = game["user"]
                    _send_data["rival_black"] = self.scope["user"].username
                else:
                    _send_data["rival_black"] = game['user']
                    _send_data["rival_white"] = self.scope["user"].username

        if ws_json['cmd'] == 'show_games' or ws_json['cmd'] == 'join_game' or ws_json['cmd'] == 'disconnect':
            data = ''

            for key in r.keys('game_*'):
                k = ast.literal_eval(r.get(key).decode("utf-8"))
                k['ttl'] = r.ttl(key)
                data = data + str(k) + ', '

            if data == '':
                data = '[]'

            if ws_json['cmd'] == 'show_games':
                _send_data["cmd"] = "list_games"
            _send_data["list_games"] = ast.literal_eval(data)

        if ws_json['cmd'] == 'connect_game':
            _send_data = {"cmd": "connect_game",
                          "status": "200"
                          }

        if ws_json['cmd'] == 'move':
            _send_data = {"cmd": "move",
                          "color": ws_json['color'],
                          "piece": ws_json['piece'],
                          "start_x": ws_json['start_x'],
                          "start_y": ws_json['start_y'],
                          "end_x": ws_json['end_x'],
                          "end_y": ws_json['end_y'],
                          "piece_id": ws_json['piece_id'],
                          }

        await self.channel_layer.group_send(
            self.game_group_name,
            {'type': 'send_data', 'message': _send_data}
        )

    # Receive message from game group
    async def send_data(self, event):
        # Send message to WebSocket
        print('SENT: ' + str(event['message']))

        await self.send(text_data=json.dumps(event['message']))
