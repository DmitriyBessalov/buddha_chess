from django.contrib import admin
from .models import *


class GameAdmin(admin.ModelAdmin):
    list_display = ('chess_variant', 'arrangement', 'white', 'black', 'results')


admin.site.register(Game, GameAdmin)
