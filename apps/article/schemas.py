from ninja import Schema
from datetime import datetime


class ArticleCreate(Schema):
    title: str
    content: str


class ArticleUpdate(Schema):
    title: str
    content: str
    created: datetime

