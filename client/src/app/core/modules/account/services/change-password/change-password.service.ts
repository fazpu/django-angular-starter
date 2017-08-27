import { Injectable } from '@angular/core';
import { AuthServiceMixin } from '../auth-base.service';


@Injectable()
export class AuthChangePasswordService extends AuthServiceMixin {

  handleSuccessChangePassword() {
    this.store.dispatch(this.accountActions.ChangePasswordSuccess(this.setUserActionPayload(null)));
    this.router.navigate(['/account/change-password-success']);
  }

  handleFailureChangePassword(error) {
    this.store.dispatch(this.accountActions.ChangePasswordError(
      this.setUserActionPayload(null, this.getResponseErrorMessage(error))));
  }

  changePassword(formData) {
    return this.userService.changePassword(formData)
      .subscribe(
        response => this.handleSuccessChangePassword(),
        error => this.handleFailureChangePassword(error)
      );
  }

}
