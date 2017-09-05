import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IAccountState } from '../models';


@Injectable()
export class AccountActions {
    static LOGIN = '[ACCOUNT] LOGIN';
    static LOGIN_SUCCESS = '[ACCOUNT] LOGIN SUCCESS';
    static LOGIN_ERROR = '[ACCOUNT] LOGIN ERROR';

    static LOGOUT = '[ACCOUNT] LOGOUT';
    static LOGOUT_SUCCESS = '[ACCOUNT] LOGOUT SUCCESS';
    static LOGOUT_ERROR = '[ACCOUNT] LOGOUT ERROR';

    static REGISTRATION = '[ACCOUNT] REGISTRATION';
    static REGISTRATION_SUCCESS = '[ACCOUNT] REGISTRATION SUCCESS';
    static REGISTRATION_ERROR = '[ACCOUNT] REGISTRATION ERROR';

    static CHANGE_PASSWORD = '[ACCOUNT] CHANGE_PASSWORD';
    static CHANGE_PASSWORD_SUCCESS = '[ACCOUNT] CHANGE_PASSWORD SUCCESS';
    static CHANGE_PASSWORD_ERROR = '[ACCOUNT] CHANGE_PASSWORD ERROR';

    static FORGOTTEN_PASSWORD_REQUEST = '[ACCOUNT] CHANGE_FORGOTTEN_REQUEST';
    static FORGOTTEN_PASSWORD_REQUEST_SUCCESS = '[ACCOUNT] CHANGE_FORGOTTEN_REQUEST SUCCESS';
    static FORGOTTEN_PASSWORD_REQUEST_ERROR = '[ACCOUNT] CHANGE_FORGOTTEN_REQUEST ERROR';

    static FORGOTTEN_PASSWORD_CONFIRM = '[ACCOUNT] CHANGE_FORGOTTEN_CONFIRM';
    static FORGOTTEN_PASSWORD_CONFIRM_SUCCESS = '[ACCOUNT] CHANGE_FORGOTTEN_CONFIRM SUCCESS';
    static FORGOTTEN_PASSWORD_CONFIRM_ERROR = '[ACCOUNT] CHANGE_FORGOTTEN_CONFIRM ERROR';

    static CHECK_EXPIRATION = '[ACCOUNT] CHECK_EXPIRATION';

    static REQUEST_START = '[ACCOUNT] REQUEST START';
    static REQUEST_FINISH = '[ACCOUNT] REQUEST FINISH';

    static CHECK_TOKEN_FOR_REFRESH = '[ACCOUNT] CHECK TOKEN FOR REFRESH';
    static REFRESH_TOKEN_SUCCESS = '[ACCOUNT] REFRESH TOKEN SUCCESS';
    static REFRESH_TOKEN_ERROR = '[ACCOUNT] REFRESH TOKEN ERROR';

    // Request lifecycle
    RequestStart(): Action {
        return {
            type: AccountActions.REQUEST_START,
            payload: true
        };
    }

    RequestFinish(): Action {
        return {
            type: AccountActions.REQUEST_START,
            payload: false
        };
    }

    // Login
    LoginSuccess(userPayload: IAccountState): Action {
        return {
            type: AccountActions.LOGIN_SUCCESS,
            payload: userPayload
        };
    }

    LoginError(userPayload: IAccountState) {
        return {
            type: AccountActions.LOGIN_ERROR,
            payload: userPayload
        };
    }

    // Logout
    LogoutSuccess(): Action {
        return {
            type: AccountActions.LOGOUT_SUCCESS,
            payload: null
        };
    }

    // Registration
    RegistrationSuccess(userPayload: IAccountState): Action {
        return {
            type: AccountActions.REGISTRATION_SUCCESS,
            payload: userPayload
        };
    }

    RegistrationError(userPayload: IAccountState) {
        return {
            type: AccountActions.REGISTRATION_ERROR,
            payload: userPayload
        };
    }

    CheckExpiration(): Action {
        return {
            type: AccountActions.CHECK_EXPIRATION,
            payload: true
        };
    }

    // Check password
    ChangePasswordSuccess(userPayload: IAccountState): Action {
        return {
            type: AccountActions.CHANGE_PASSWORD_SUCCESS,
            payload: userPayload
        };
    }

    ChangePasswordError(userPayload: IAccountState) {
        return {
            type: AccountActions.CHANGE_PASSWORD_ERROR,
            payload: userPayload
        };
    }

    // Forgotten password request
    ForgottenPasswordSuccess(userPayload: IAccountState): Action {
        return {
            type: AccountActions.FORGOTTEN_PASSWORD_REQUEST_SUCCESS,
            payload: userPayload
        };
    }

    ForgottenPasswordError(userPayload: IAccountState) {
        return {
            type: AccountActions.FORGOTTEN_PASSWORD_REQUEST_ERROR,
            payload: userPayload
        };
    }

    // Forgotten password confirm
    ForgottenPasswordConfirmSuccess(userPayload: IAccountState): Action {
        return {
            type: AccountActions.FORGOTTEN_PASSWORD_CONFIRM_SUCCESS,
            payload: userPayload
        };
    }

    ForgottenPasswordConfirmError(userPayload: IAccountState) {
        return {
            type: AccountActions.FORGOTTEN_PASSWORD_CONFIRM_ERROR,
            payload: userPayload
        };
    }

    CheckTokenForRefresh() {
        return {
            type: AccountActions.CHECK_TOKEN_FOR_REFRESH,
            payload: null
        };
    }

    RefreshTokenSuccess(userPayload: IAccountState): Action {
        return {
            type: AccountActions.REFRESH_TOKEN_SUCCESS,
            payload: userPayload
        };
    }

    RefreshTokenError(userPayload: IAccountState) {
        return {
            type: AccountActions.REFRESH_TOKEN_ERROR,
            payload: userPayload
        };
    }
}
