from django.urls import re_path, path

from . import consumers

websocket_urlpatterns = [
    # re_path(r'game/(?P<game_id>\d+)/$', consumers.GameConsumer.as_asgi()),
    path('start_game', consumers.StartGameConsumer.as_asgi()),
]
