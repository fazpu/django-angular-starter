import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthLoginService } from '../../services';
import { AppLayoutActions } from  '../../../../states/layout/app.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../states/reducer.base';

import { getErrorMessagesSelector } from '../../states/account.selectors';


@Component({
    selector: 'auth-login',
    templateUrl: './login.component.pug',
    styleUrls: ['./login.component.scss', ],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthLoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessages = this.store.let(getErrorMessagesSelector);

    email = new FormControl('', [Validators.required, Validators.minLength(3), Validators.email,
                                 Validators.maxLength(100)]);
    password = new FormControl('', [Validators.required, Validators.minLength(6)]);


    constructor(
        private auth: AuthLoginService,
        private formBuilder: FormBuilder,
        private layoutActions: AppLayoutActions,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    }

    login() {
        this.auth.login(this.loginForm.value);
    }
}
