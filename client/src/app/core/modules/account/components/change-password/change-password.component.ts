import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthChangePasswordService } from '../../services';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../states/reducer.base';
import { getErrorMessagesSelector } from '../../states/account.selectors';


@Component({
    selector: 'auth-change-password',
    templateUrl: './change-password.component.pug',
    styleUrls: ['../../utils/account-card/account.card.component.scss',]
})

export class AuthChangePasswordComponent implements OnInit {
    changePasswordForm: FormGroup;
    errorMessages = this.store.let(getErrorMessagesSelector);

    newPassword1 = new FormControl('', [Validators.required, Validators.minLength(6)]);
    newPassword2 = new FormControl('', [Validators.required, Validators.minLength(6)]);

    constructor(
        private auth: AuthChangePasswordService,
        private formBuilder: FormBuilder,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.changePasswordForm = this.formBuilder.group({
            newPassword1: this.newPassword1,
            newPassword2: this.newPassword2
        });
    }

    changePassword() {
        this.auth.changePassword({new_password1: this.changePasswordForm.value.newPassword1,
                                  new_password2: this.changePasswordForm.value.newPassword2});
    }
}
