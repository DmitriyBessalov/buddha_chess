# Generated by Django 3.2.3 on 2021-05-31 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='slug',
            field=models.CharField(default='', max_length=512, unique=True),
        ),
    ]
