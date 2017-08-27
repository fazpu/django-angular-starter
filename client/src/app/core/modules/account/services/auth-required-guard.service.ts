import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthServiceMixin } from './auth-base.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthServiceMixin,
              private router: Router) {}

  canActivate() {
    if (this.auth.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/unauthorized-page']);
      return false;
    }
  }

}

@Injectable()
export class AuthGuardMustNotBeLoggedIn implements CanActivate {

  constructor(public auth: AuthServiceMixin, private router: Router) {}

  canActivate() {
    if (!this.auth.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/account/logout']);
      return false;
    }
  }

}

