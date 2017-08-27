import { Routes } from '@angular/router';
import { AuthGuardLogin, AuthGuardMustNotBeLoggedIn  } from './services/auth-required-guard.service';

// components
import { AuthChangePasswordComponent }
from './components/change-password/change-password.component';

import { AuthForgottenPasswordRequestComponent }
from './components/forgotten-password-request/forgotten-password-request.component';

import { AuthForgottenPasswordConfirmComponent }
from './components/forgotten-password-confirm/forgotten-password-confirm.component';

import { AuthLoginComponent }
from './components/login/login.component';

import { AuthRegistrationComponent }
from './components/registration/registration.component';

import { AuthLogoutComponent }
from './components/logout/logout.component';

import { AuthChangePasswordSuccessComponent }
from './components/_success_views/change-password-success/change-password-success.component';

import { AuthForgottenPasswordRequestSuccessComponent }
from './components/_success_views/forgotten-password-request-success/forgotten-password-request-success.component';

import { AuthLogoutSuccessComponent }
from './components/_success_views/logout-success/logout.component-success';

import { AuthRegistrationSuccessComponent }
from './components/_success_views/registration/registration-success.component';


export const routes: Routes = [
  {
    path: 'change-password',
    component: AuthChangePasswordComponent,
    canActivate: [ AuthGuardLogin ]
  },
  {
    path: 'change-password-success',
    component: AuthChangePasswordSuccessComponent,
    canActivate: [ AuthGuardLogin ]
  },
  {
    path: 'forgotten-password',
    component: AuthForgottenPasswordRequestComponent,
  },
  {
    path: 'forgotten-password-success',
    component: AuthForgottenPasswordRequestSuccessComponent,
  },
  {
    path: 'forgotten-password/confirm/:uid/:passwordResetToken',
    component: AuthForgottenPasswordConfirmComponent,
  },
  {
    path: 'login',
    component: AuthLoginComponent,
    canActivate: [ AuthGuardMustNotBeLoggedIn ]
  },
  {
    path: 'registration',
    component: AuthRegistrationComponent,
    canActivate: [ AuthGuardMustNotBeLoggedIn ]
  },
  {
    path: 'registration-success',
    component: AuthRegistrationSuccessComponent,
    canActivate: [ AuthGuardMustNotBeLoggedIn ]
  },
  {
    path: 'logout',
    component: AuthLogoutComponent,
    canActivate: [ AuthGuardLogin ]
  },
  {
    path: 'logout-success',
    component: AuthLogoutSuccessComponent,
    canActivate: [ AuthGuardLogin ]
  },
];
