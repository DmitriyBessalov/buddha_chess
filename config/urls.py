from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, re_path, include
from apps.base.views import index, robots, git_update

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('^$', index),
    re_path('^ru/', index),
    url(r'^robots\.txt', robots),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('git_update', git_update),
    path('auth/', index),
    path('api/auth', include('apps.users.urls')),  # swagger /api/auth
    path('api/article/', include('apps.article.urls')),  # swagger /api/article/docs
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
