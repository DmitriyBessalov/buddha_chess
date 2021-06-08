import json
from random import randint

from django.contrib.contenttypes.models import ContentType

from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from .models import Game


class StartGameConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        # self.room_name = randint(100000000, 999999999)
        self.game_group_name = 'start_game'

        await self.channel_layer.group_add(
            self.game_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.game_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        ws_json = json.loads(text_data)
        data = {"cmd": "error"}
        if ws_json['cmd'] == 'show_games':
            # Получить Авторизацию


            data = {"cmd": "list_game",
                    "game_id": "1",
                    "chess_variant": "1",
                    "login": "AnonimousUser",
                    "color": "while"}

        if ws_json['cmd'] == 'create_game':
            data = {"cmd": "add_list_game",
                    "game_id": "",
                    "chess_variant": "",
                    "login": "SocialUser",
                    "color": "char"}

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

        # Send message to room group
        await self.channel_layer.group_send(
            self.game_group_name,
            {'type': 'send_data', 'message': data}
        )

    # Receive message from room group
    async def send_data(self, event):
        # Send message to WebSocket
        await self.send(text_data=json.dumps(event['message']))

    # @database_sync_to_async
    # def create_new_comment(self, text):
    #     # ct = ContentType.objects.get_for_model(Post)
    #     new_comment = Game.objects.create(
    #         author=self.scope['user'],
    #         text=text,
    #         # content_type=ct,
    #         object_id=int(self.game_id)
    #     )
    #     return new_comment
