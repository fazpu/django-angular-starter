from .base import *

INSTALLED_APPS += [
    # GeoDjango
    'django.contrib.gis',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'webapp',
        'USER': 'webuser',
        'PASSWORD': 'webuser',
        'HOST': 'django-angular-postgis',
        'PORT': '5459'
    }
}
