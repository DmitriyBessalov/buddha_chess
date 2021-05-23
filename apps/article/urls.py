from django.urls import path
from ninja import NinjaAPI
from apps.article.api import router as article_router

api = NinjaAPI()
api.add_router('', article_router)

urlpatterns = [
     path('', api.urls),
]
