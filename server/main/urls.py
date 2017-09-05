from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic.base import TemplateView
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

from .views import IndexView, home_files

urlpatterns = [
    url(r'^admin-site-internal/', include(admin.site.urls)),

    url(r'^(?P<filename>(robots.txt)|(humans.txt))$', home_files, name='home-files'),

    # django-rest-auth
    url(r'^email-verification/$',
        TemplateView.as_view(template_name="emails/email_verification.html"),
        name='email-verification'),

    url(r'^account/forgotten-password/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/'
        r'(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})$',
        IndexView.as_view(),
        name='password_reset_confirm'),

    url(r'^api/rest-auth/', include('rest_auth.urls')),
    url(r'^api/rest-auth/registration/', include('rest_auth.registration.urls')),

    # JWT tokens
    url(r'^api/api-token-auth/', obtain_jwt_token),
    url(r'^api/api-token-refresh/', refresh_jwt_token),

]

if settings.APP_ENVIRONMENT == 'swagger':
    from rest_framework_swagger.views import get_swagger_view

    schema_view = get_swagger_view(title='Django Angular API')

    urlpatterns += [
        url(r'^swagger$', schema_view)
    ]

urlpatterns += [
    # allowing rendering templates while allowing routing in angular index
    url('^.*$', IndexView.as_view(), name='index'),
]
