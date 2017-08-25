from django.db import models

class Estado(models.Model):
    sigla = models.CharField(max_length=2)
    nome = models.CharField(max_length=20, blank=True, null=True)