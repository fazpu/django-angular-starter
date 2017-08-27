import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Store } from '@ngrx/store';

import { AccountHttpService } from './account.http.service';
import { IAccountState, IUser } from '../models';

import { AccountActions } from '../states/account.actions';


@Injectable()
export class AuthServiceMixin {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public userService: AccountHttpService,
              public router: Router,
              public accountActions: AccountActions,
              public store: Store<IAccountState>) {}

  getTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }

  getUserFromLocalStorage() {
    const token = this.getTokenFromLocalStorage();

    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.store.dispatch(this.accountActions.LoginSuccess(this.setUserActionPayload(decodedUser)));
    }
  }

  isUserLoggedIn() {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token);
  }

  setUserActionPayload(decodedUser: IUser, requestErrors?: string[],
                       isAdmin?: boolean): IAccountState {
    return {
      loggedIn: this.isUserLoggedIn(),
      isAdmin: isAdmin ? isAdmin : false,
      user: {
        user_id: decodedUser ? decodedUser.user_id : null,
        username: decodedUser ? decodedUser.username : '',
        email: decodedUser ? decodedUser.email : '',
        exp: decodedUser ? decodedUser.exp : ''},
      loading: false,
      requestErrors: requestErrors ? requestErrors : []
    };
  }

  getResponseErrorMessage(error) {
    let errorMessages = error.error;
    if (errorMessages) {
      return Object.values(errorMessages);
    }
  }

}
