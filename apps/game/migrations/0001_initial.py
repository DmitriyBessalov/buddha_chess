# Generated by Django 3.2.3 on 2021-06-05 17:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chess_variant', models.CharField(choices=[(1, 'Классические'), (2, 'Фишера'), (3, 'Инь-Ян'), (4, 'Простые'), (5, 'Смешанные'), (6, 'Золотого Порядка')], default=1, max_length=1, verbose_name='Шахматный вариант')),
                ('arrangement', models.IntegerField(default=0, verbose_name='Номер растановки')),
                ('moves', models.TextField(verbose_name='Ходы')),
                ('result', models.CharField(choices=[(0, 'Недоиграна'), (1, 'Белые победили'), (2, 'Чёрные победили'), (3, 'Белые сдались'), (4, 'Черные сдались'), (5, 'Белые дисконнект'), (6, 'Черные дисконнект'), (7, 'Пат'), (9, 'Ничья')], default=0, max_length=1, verbose_name='Статус')),
                ('start_game', models.DateTimeField(auto_now_add=True, null=True)),
                ('black', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='black', to=settings.AUTH_USER_MODEL, verbose_name='Черный игрок')),
                ('white', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='white', to=settings.AUTH_USER_MODEL, verbose_name='Белый игрок')),
            ],
            options={
                'verbose_name': 'игра',
                'verbose_name_plural': 'игры',
            },
        ),
    ]
