import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthForgottenPasswordRequestService } from '../../services';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../states/reducer.base';
import { getErrorMessagesSelector } from '../../states/account.selectors';

@Component({
    selector: 'auth-forgotten-password-request',
    templateUrl: './forgotten-password-request.component.pug',
    styleUrls: ['../../utils/account-card/account.card.component.scss',]
})

export class AuthForgottenPasswordRequestComponent implements OnInit {
    forgottenPasswordRequestForm: FormGroup;
    errorMessages = this.store.let(getErrorMessagesSelector);

    email = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100),
                                 Validators.email]);

    constructor(
      private auth: AuthForgottenPasswordRequestService,
      private formBuilder: FormBuilder,
      private store: Store<AppState>
    ) {}

    ngOnInit() {
      this.forgottenPasswordRequestForm = this.formBuilder.group({
            email: this.email
        });
    }

    forgottenPasswordRequest() {
      this.auth.forgottenPasswordRequest(this.forgottenPasswordRequestForm.value);
    }
}
