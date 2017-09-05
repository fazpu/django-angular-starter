// imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { MaterialModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../services/http-request-base.service';


// providers
import { AccountActions } from './states/account.actions';
import { AppLayoutActions } from  '../../states/layout/app.actions';
import { AUTH_SERVICES } from './services';


// routers
import { routes } from './account.routing';

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

import { TextEqualityValidatorDirective } from '../../../shared/directives/validator.match';

import { AccountCardComponent } from './utils/account-card/account.card.component';

import { AuthChangePasswordSuccessComponent }
from './components/_success_views/change-password-success/change-password-success.component';

import { AuthForgottenPasswordRequestSuccessComponent }
from './components/_success_views/forgotten-password-request-success/forgotten-password-request-success.component';

import { AuthLogoutSuccessComponent }
from './components/_success_views/logout-success/logout.component-success';

import { AuthRegistrationSuccessComponent }
from './components/_success_views/registration/registration-success.component';

// effects
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './states/account.effects';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        EffectsModule.run(AccountEffects),
    ],
    declarations: [
        AuthChangePasswordComponent,
        AuthForgottenPasswordRequestComponent,
        AuthForgottenPasswordConfirmComponent,
        AuthLoginComponent,
        AuthRegistrationComponent,
        AuthLogoutComponent,
        TextEqualityValidatorDirective,
        AccountCardComponent,

        AuthChangePasswordSuccessComponent,
        AuthForgottenPasswordRequestSuccessComponent,
        AuthLogoutSuccessComponent,
        AuthRegistrationSuccessComponent,
    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        AccountActions,
        AppLayoutActions,
        ...AUTH_SERVICES
    ]
})

export class AccountModule {}
