from django.http import JsonResponse, HttpResponse

from apps.users.models import authentication_jwt

from apps.article.models import Article
from apps.article.schemas import *

from ninja import Router
from ninja.security import HttpBearer


class AuthBearer(HttpBearer):
    def authenticate(self, request, token):
        return token


router = Router()


@router.get("/bearer", auth=AuthBearer())
def bearer(request):
    """ Получиние авторизации пользователя """
    request.user = authentication_jwt(token=request.auth)
    return {"email": request.user.email}


# @router.post('/')
# def article_create(request, payload: ArticleCreate):
#     data = payload.dict()
#     try:
#         Article.objects.create(**data)
#         return HttpResponse(status=201)
#     except Exception:
#         return HttpResponse(status=400)


# @router.patch('/{pk}')
# def article_update(request, payload: ArticleUpdate, pk):
#     data = payload.dict()
#     Article.objects.filter(pk=pk).update(**data)
#     return HttpResponse(status=204)


@router.post('/')
def article_get(request, item: ArticleGet):
    article = Article.objects.get(language=item.lang, slug=item.slug)
    return JsonResponse({'title': article.title, 'content': article.content}, safe=False, json_dumps_params={'ensure_ascii': False}, headers={'Access-Control-Allow-Origin': '*'})


# @router.delete('/{pk}')
# def article_dell(request, pk):
#     Article.objects.filter(pk=pk).delete()
#     return HttpResponse(status=204)
