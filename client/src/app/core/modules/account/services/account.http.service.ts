import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IChangePassword, IForgottenPasswordConfirm, IForgottenPasswordRequest, ILogout, IRegister, ILogin }
from '../models';

@Injectable()
export class AccountHttpService {

  private URLS = {
      'CHANGE_PASSWORD': '/api/rest-auth/password/change/',
      'FORGOTTEN_PASSWORD_CONFIRM': '/api/rest-auth/password/confirm/',
      'FORGOTTEN_PASSWORD_REQUEST': '/api/rest-auth/password/reset/',
      'LOGOUT': '/api/rest-auth/logout/',
      'REGISTER': '/api/rest-auth/registration/',
      'LOGIN': '/api/rest-auth/login/'
  };

  constructor(private http: HttpClient) { }

  changePassword(data: IChangePassword): Observable<Response> {
    return this.http.post(this.URLS.CHANGE_PASSWORD, JSON.stringify(data));
  }

  forgottenPasswordConfirm(data: IForgottenPasswordConfirm): Observable<Response> {
    return this.http.post(this.URLS.FORGOTTEN_PASSWORD_CONFIRM, JSON.stringify(data));
  }

  forgottenPasswordRequest(data: IForgottenPasswordRequest): Observable<Response> {
    return this.http.post(this.URLS.FORGOTTEN_PASSWORD_REQUEST, JSON.stringify(data));
  }

  logout(data: ILogout): Observable<Response> {
    return this.http.post(this.URLS.LOGOUT, JSON.stringify(data));
  }

  register(user: IRegister): Observable<Response> {
    return this.http.post(this.URLS.REGISTER, JSON.stringify(user));
  }

  login(credentials: ILogin): Observable<Response> {
    return this.http.post(this.URLS.LOGIN, JSON.stringify(credentials));
  }

}
