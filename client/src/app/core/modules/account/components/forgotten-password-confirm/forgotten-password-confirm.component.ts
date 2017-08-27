import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthForgottenPasswordConfirmService } from '../../services';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'auth-forgotten-password-confirm',
    templateUrl: './forgotten-password-confirm.component.pug',
    styleUrls: ['../../utils/account-card/account.card.component.scss',]
})

export class AuthForgottenPasswordConfirmComponent implements OnInit {
    forgottenPasswordConfirmForm: FormGroup;

    token: string;
    uid: string;
    new_password1 = new FormControl('', [Validators.required]);
    new_password2 = new FormControl('', [Validators.required]);

    constructor(
      private auth: AuthForgottenPasswordConfirmService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
    ) {}

    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.uid = params.get('uid');
        this.token = params.get('passwordResetToken');
      });

      this.forgottenPasswordConfirmForm = this.formBuilder.group({
          uid: this.uid,
          token: this.token,
          new_password1: this.new_password1,
          new_password2: this.new_password2
        });
    }

    forgottenPasswordConfirm() {
      this.auth.forgottenPasswordConfirm(this.forgottenPasswordConfirmForm.value);
    }
}
