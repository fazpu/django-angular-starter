from django.conf import settings
from rest_framework.permissions import AllowAny


def swagger_permissions():
    def decorator(func):
        if settings.APP_ENVIRONMENT == 'swagger':
            func.permission_classes = (AllowAny, )
        return func
    return decorator
