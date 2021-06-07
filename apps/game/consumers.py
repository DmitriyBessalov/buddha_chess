import json
from random import randint

from django.contrib.contenttypes.models import ContentType

from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from .models import Game


class StartGameConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.room_name = randint(100000000, 999999999)
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
        text_data_json = json.loads(text_data)
        comment = text_data_json['cmd']
        # new_comment = await self.create_new_comment(comment)
        # data = {'author': new_comment.author.username,
        #        'created_at': new_comment.created_at.strftime('%Y-%m-%d %H:%m'),
        #        'text': new_comment.text}
        # Send message to room group
        await self.channel_layer.group_send(
            self.game_group_name,
            {
                'type': 'new_comment',
                'message': comment
            }
        )

    # Receive message from room group
    async def new_comment(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))

    @database_sync_to_async
    def create_new_comment(self, text):
        # ct = ContentType.objects.get_for_model(Post)
        new_comment = Game.objects.create(
            author=self.scope['user'],
            text=text,
            # content_type=ct,
            object_id=int(self.game_id)
        )
        return new_comment
