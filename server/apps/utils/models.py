from django.db import models
from django.utils.translation import ugettext_lazy as _


class BaseAbstractModel(models.Model):
    creation_date = models.DateTimeField(verbose_name=_('creation date'), null=False, blank=False, auto_now_add=True)
    update_date = models.DateTimeField(verbose_name=_('update date'), null=False, blank=False, auto_now=True)

    class Meta:
        abstract = True
