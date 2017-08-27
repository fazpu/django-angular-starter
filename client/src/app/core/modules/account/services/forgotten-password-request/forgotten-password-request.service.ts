import { Injectable } from '@angular/core';
import { AuthServiceMixin } from '../auth-base.service';


@Injectable()
export class AuthForgottenPasswordRequestService extends AuthServiceMixin {

  handleSuccessForgottenPasswordRequest() {
    this.store.dispatch(this.accountActions.ForgottenPasswordSuccess(this.setUserActionPayload(null)));
    this.router.navigate(['/account/forgotten-password-success']);
  }

  handleFailureForgottenPasswordRequest(error) {
    this.store.dispatch(this.accountActions.ForgottenPasswordError(
      this.setUserActionPayload(null, this.getResponseErrorMessage(error))));
  }

  forgottenPasswordRequest(formData) {
    return this.userService.forgottenPasswordRequest(formData)
      .subscribe(
        response => this.handleSuccessForgottenPasswordRequest(),
        error => this.handleFailureForgottenPasswordRequest(error)
      );
  }

}
