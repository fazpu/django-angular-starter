import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthRegistrationService } from '../../services';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../states/reducer.base';
import { getErrorMessagesSelector } from '../../states/account.selectors';

@Component({
    selector: 'auth-registration',
    templateUrl: './registration.component.pug',
    styleUrls: ['../../utils/account-card/account.card.component.scss',]
})

export class AuthRegistrationComponent implements OnInit {
    registerForm: FormGroup;
    errorMessages = this.store.let(getErrorMessagesSelector);

    email = new FormControl('', [Validators.required, Validators.minLength(3),
                                 Validators.maxLength(100), Validators.email]);
    // validation on equality done in the template
    password1 = new FormControl('', [Validators.required, Validators.minLength(6)]);
    password2 = new FormControl('', [Validators.required, Validators.minLength(6)]);

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthRegistrationService,
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: this.email,
            password1: this.password1,
            password2: this.password2
        });
    }

    register() {
        this.auth.register(this.registerForm.value);
    }
}
