from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework import exceptions
from rest_framework.authtoken.models import Token


class SocialUser(AbstractUser):
    email = models.EmailField(verbose_name="Email", unique=True)
    ava = models.ImageField(upload_to="photos/%Y/%m/%d/", verbose_name="Аватар", blank=True, null=True)
    phone = models.IntegerField(verbose_name="Телефон", blank=True, null=True)
    description = models.TextField(max_length=254, verbose_name="Описание", blank=True, null=True)
    date_birthday = models.DateField(verbose_name="Дата рождения", blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'Пользователь '
        verbose_name_plural = 'Пользователи'
        ordering = ['email']


def authentication_jwt(token):
    try:
        _user = Token.objects.get(key=token)
    except Exception:
        msg = 'Ошибка аутентификации. Токен неверен'
        raise exceptions.AuthenticationFailed(msg)

    try:
        _user = SocialUser.objects.get(pk=int(_user.user_id))
    except SocialUser.DoesNotExist:
        msg = 'Пользователь соответствующий данному токену не найден.'
        raise exceptions.AuthenticationFailed(msg)

    if not _user.is_active:
        msg = 'Данный пользователь деактивирован.'
        raise exceptions.AuthenticationFailed(msg)
    return _user
