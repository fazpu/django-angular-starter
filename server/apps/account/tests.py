from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User


class AccountTests(APITestCase):

    def _create_user(self):
        user = User.objects.create_user(username='aaa', email='aaa@aaa.cz', password='123456')
        user.save()

    def test_registration_single_step(self):
        url = '/api/rest-auth/registration/'
        data = {'email': 'aaa@aaa.cz',
                'password1': '123456',
                'password2': '123456'
                }
        response = self.client.post(url, data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_jwt_login(self):
        self._create_user()
        url = '/api/rest-auth/login/'
        data = {'email': 'aaa@aaa.cz',
                'password': '123456',
                }
        response = self.client.post(url, data=data)
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIsNotNone(response.data['token'])

    # def test_jwt_token_renewal(self):
    #     self._create_user()
    #     url = '/api/v1/account/registration-default/'
    #
    # def test_change_password(self):
    #     self._create_user()
    #     url = '/api/rest-auth/password/change/'
    #
    # def test_get_user(self):
    #     self._create_user()
    #     url = '/api/rest-auth/user/'
