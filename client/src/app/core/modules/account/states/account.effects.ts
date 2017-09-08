import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { routerActions } from '@ngrx/router-store';
import { Store } from '@ngrx/store';

import { AuthRefreshTokenService } from '../services/refresh-token/refresh-token.service';
import { AppState } from '../../../states/reducer.base';

@Injectable()
export class AccountEffects {

  constructor(
      private actions: Actions,
      private refreshTokenService: AuthRefreshTokenService,
      public store: Store<AppState>) {}

  @Effect({dispatch: false}) refreshTokenEffect = this.actions
    .ofType(routerActions.UPDATE_LOCATION)
    .map(toPayload)
    .map(payload => {
      return this.refreshTokenService.checkForTokenRefresh();
    });
}
