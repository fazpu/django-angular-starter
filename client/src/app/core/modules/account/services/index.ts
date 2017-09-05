import { AuthChangePasswordService } from './change-password/change-password.service';
import { AuthForgottenPasswordConfirmService } from './forgotten-password-confirm/forgotten-password-confirm.service';
import { AuthForgottenPasswordRequestService } from './forgotten-password-request/forgotten-password-request.service';
import { AuthLoginService } from './login/login.service';
import { AuthLogoutService } from './logout/logout.service';
import { AuthRegistrationService } from './registration/registration.service';
import { AccountHttpService } from './account.http.service';
import { AuthGuardLogin, AuthGuardMustNotBeLoggedIn } from './auth-required-guard.service';
import { AuthRefreshTokenService } from './refresh-token/refresh-token.service';

export * from './change-password/change-password.service';
export * from './forgotten-password-confirm/forgotten-password-confirm.service';
export * from './forgotten-password-request/forgotten-password-request.service';
export * from './login/login.service';
export * from './logout/logout.service';
export * from './registration/registration.service';
export * from './refresh-token/refresh-token.service';

export const AUTH_SERVICES = [
  AuthChangePasswordService,
  AuthForgottenPasswordConfirmService,
  AuthForgottenPasswordRequestService,
  AuthLoginService,
  AuthLogoutService,
  AuthRegistrationService,
  AuthRefreshTokenService,
  AccountHttpService,
  AuthGuardLogin,
  AuthGuardMustNotBeLoggedIn
];
