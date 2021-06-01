from django.contrib import admin
from .models import *


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'slug', 'title', 'language', 'published')


admin.site.register(Article, ArticleAdmin)
