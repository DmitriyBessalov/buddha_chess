from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('games', consumers.StartGameConsumer.as_asgi()),
]
