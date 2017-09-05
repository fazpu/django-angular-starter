from .base import *
import datetime

ALLOWED_HOSTS = ['*']

APP_ENVIRONMENT = 'dev'

SITE_ID = 2

INSTALLED_APPS += ('rest_framework_swagger',)

# JWT Tokens settings
JWT_AUTH = {
    'JWT_ALLOW_REFRESH': True,
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(hours=12),
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=1),
    }

# GMAIL SETTING
DEFAULT_FROM_EMAIL = 'example@example.com'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'example@gmail.com'
EMAIL_MAIN = 'example@gmail.com'
EMAIL_HOST_PASSWORD = 'example_password'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
