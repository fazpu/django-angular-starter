import { Injectable } from '@angular/core';
import { AuthServiceMixin } from '../auth-base.service';


@Injectable()
export class AuthRegistrationService extends AuthServiceMixin {

  handleSuccessRegister(response) {
    this.store.dispatch(this.accountActions.RegistrationSuccess(this.setUserActionPayload(null)));
    this.router.navigate(['/account/registration-success']);
  }

  handleFailureRegister(error) {
    this.store.dispatch(this.accountActions.RegistrationError(
      this.setUserActionPayload(null, this.getResponseErrorMessage(error))));
  }

  register(formData) {
    return this.userService.register(formData)
      .subscribe(
        response => this.handleSuccessRegister(response),
        error => this.handleFailureRegister(error)
      );
  }

}
