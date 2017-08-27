import { Injectable } from '@angular/core';
import { AuthServiceMixin } from '../auth-base.service';


@Injectable()
export class AuthLoginService extends AuthServiceMixin {
  errorMessage: any;

  /* LOGIN methods */
  handleSuccessLogin(response) {
    localStorage.setItem('token', response.token);
    const decodedUser = this.decodeUserFromToken(response.token);
    this.store.dispatch(this.accountActions.LoginSuccess(this.setUserActionPayload(decodedUser)));
    // redirect
    this.router.navigate(['/account/change-password']);
  }

  handleFailedLogin(error) {
    this.store.dispatch(this.accountActions.LoginError(
      this.setUserActionPayload(null, this.getResponseErrorMessage(error))));
  }

  login(emailAndPassword) {
    return this.userService.login(emailAndPassword)
      .subscribe(
        response => this.handleSuccessLogin(response),
        error => this.handleFailedLogin(error)
      );
  }

}
