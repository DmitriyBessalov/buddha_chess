from datetime import datetime

from django.db import models
from apps.users.models import SocialUser


class Game(models.Model):
    chess_variants = [
        (1, 'Классические'),
        (2, 'Фишера'),
        (3, 'Инь-Ян'),
        (4, 'Простые'),
        (5, 'Смешанные'),
        (6, 'Золотого Порядка'),
    ]

    chess_variant = models.CharField(max_length=1, choices=chess_variants, default=1, verbose_name='Шахматный вариант')
    arrangement = models.IntegerField(default=0, verbose_name='Номер растановки')
    white = models.ForeignKey(SocialUser, related_name='white', on_delete=models.CASCADE, verbose_name='Белый игрок')
    black = models.ForeignKey(SocialUser, related_name='black', on_delete=models.CASCADE, verbose_name='Черный игрок')
    moves = models.TextField(verbose_name='Ходы')
    results = [
        (0, 'Недоиграна'),
        (1, 'Белые победили'),
        (2, 'Чёрные победили'),
        (3, 'Белые сдались'),
        (4, 'Черные сдались'),
        (5, 'Белые дисконнект'),
        (6, 'Черные дисконнект'),
        (7, 'Пат'),
        (9, 'Ничья'),
    ]
    result = models.CharField(max_length=1, choices=results, default=0, verbose_name='Статус')
    start_game = models.DateTimeField(default=datetime.now, verbose_name='Время начала партии')

    class Meta:
        verbose_name = 'Партия'
        verbose_name_plural = 'Партии'
