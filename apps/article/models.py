from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Article(models.Model):
    languages = [
        ('ru', 'Russian'),
        ('en', 'English'),
        ('it', 'Italian'),
    ]

    language = models.CharField(max_length=2, choices=languages, default='ru')

    slug = models.CharField(max_length=512, default="/")
    title = models.CharField(max_length=512)

    content = RichTextUploadingField()

    created = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=True)

    # def __str__(self):
    #     return f'{self.title}'

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'
        unique_together = ('language', 'slug')
