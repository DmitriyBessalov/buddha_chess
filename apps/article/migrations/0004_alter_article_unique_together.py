# Generated by Django 3.2.3 on 2021-05-31 12:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0003_auto_20210531_1459'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='article',
            unique_together={('language', 'slug')},
        ),
    ]