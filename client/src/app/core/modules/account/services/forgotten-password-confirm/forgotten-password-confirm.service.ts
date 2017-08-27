import { Injectable } from '@angular/core';
import { AuthServiceMixin } from '../auth-base.service';


@Injectable()
export class AuthForgottenPasswordConfirmService extends AuthServiceMixin {

  handleSuccessForgottenPasswordConfirm() {
    this.store.dispatch(this.accountActions.ForgottenPasswordConfirmSuccess(this.setUserActionPayload(null)));
    this.router.navigate(['/account/change-password-success']);
  }

  handleFailureForgottenPasswordConfirm(error) {
    this.store.dispatch(this.accountActions.ForgottenPasswordConfirmError(
      this.setUserActionPayload(null, this.getResponseErrorMessage(error))));
  }

  forgottenPasswordConfirm(formData) {
    return this.userService.forgottenPasswordConfirm(formData)
      .subscribe(
        response => this.handleSuccessForgottenPasswordConfirm(),
        error => this.handleFailureForgottenPasswordConfirm(error)
      );
  }

}
