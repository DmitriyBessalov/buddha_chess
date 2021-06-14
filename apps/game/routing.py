from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/games', consumers.StartGameConsumer.as_asgi()),
]
