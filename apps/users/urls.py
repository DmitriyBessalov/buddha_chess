""" отрабатывает url /api/* """
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

from django.conf.urls import url
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Open API')

urlpatterns = [
     path('/', include('djoser.urls')),
     path('/token', obtain_auth_token, name='token'),
     url('^$', schema_view),
]
