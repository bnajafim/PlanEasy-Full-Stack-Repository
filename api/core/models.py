import uuid
from django.db import models


class ExampleModel(models.Model):
    slug = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    test = models.CharField(max_length=60, null=True, blank=True)