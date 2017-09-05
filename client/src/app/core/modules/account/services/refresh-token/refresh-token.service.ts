import { Injectable } from '@angular/core';
import { AuthServiceMixin } from '../auth-base.service';
import { differenceInSeconds } from 'date-fns';


@Injectable()
export class AuthRefreshTokenService extends AuthServiceMixin {

  handleSuccessRefreshToken(response) {
    localStorage.setItem('token', response.token);
    const decodedUser = this.decodeUserFromToken(response.token);
    this.store.dispatch(this.accountActions.RefreshTokenSuccess(this.setUserActionPayload(decodedUser)));
  }

  handleFailedRefreshToken(error) {
    this.store.dispatch(this.accountActions.RefreshTokenError(
      this.setUserActionPayload(null, this.getResponseErrorMessage(error))));
  }

  refreshToken(token) {
    return this.userService.refreshToken(token)
      .subscribe(
        response => this.handleSuccessRefreshToken(response),
        error => this.handleFailedRefreshToken(error)
      );
  }

  checkForTokenRefresh() {
    let token = this.getTokenFromLocalStorage();
    if (!token) {
      return;
    }
    let currentDate = new Date();

    let tokenExpirationDate = this.jwtHelper.getTokenExpirationDate(token);

    if (tokenExpirationDate > currentDate) {
      let expiresInSeconds = differenceInSeconds(tokenExpirationDate, currentDate);
      // one day
      if (expiresInSeconds < 86400) {
        this.refreshToken(token);
      }
    }
    return;
  }

}
