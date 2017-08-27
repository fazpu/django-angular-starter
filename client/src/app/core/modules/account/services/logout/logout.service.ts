import { Injectable } from '@angular/core';
import { AuthServiceMixin } from '../auth-base.service';


@Injectable()
export class AuthLogoutService extends AuthServiceMixin {

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(this.accountActions.LogoutSuccess());
    this.router.navigate(['/']);
  }

}
