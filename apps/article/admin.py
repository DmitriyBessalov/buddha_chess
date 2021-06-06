from django.contrib import admin
from .models import *


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'language', 'published')


admin.site.register(Article, ArticleAdmin)
