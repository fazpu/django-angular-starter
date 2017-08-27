// system
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

// services
import { AccountHttpService } from '../services/account.http.service';
import { AuthServiceMixin } from '../services/auth-base.service';
import { AuthGuardLogin, AuthGuardMustNotBeLoggedIn } from '../services/auth-required-guard.service';


export const TEST_IMPORTS = [
  CommonModule,
  FormsModule,
  HttpModule,
  RouterTestingModule,
  ReactiveFormsModule,
];

export const TEST_PROVIDERS = [
  AuthServiceMixin,
  AuthGuardLogin,
  AuthGuardMustNotBeLoggedIn,
  AccountHttpService
];
