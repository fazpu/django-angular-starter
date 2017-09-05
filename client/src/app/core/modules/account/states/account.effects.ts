import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { routerActions } from '@ngrx/router-store';
import { Store } from '@ngrx/store';

import { ActivatedRoute } from '@angular/router';
import { AuthRefreshTokenService } from '../services/refresh-token/refresh-token.service';
import { AccountActions } from './account.actions';
import { AppState } from '../../../states/reducer.base';

@Injectable()
export class AccountEffects {

  constructor(
      private actions: Actions,
      private accountActions: AccountActions,
      private refreshTokenService: AuthRefreshTokenService,
      public store: Store<AppState>) {}

  @Effect() data$ = this.actions
    .ofType(routerActions.UPDATE_LOCATION)
    .map(toPayload)
    .map(payload => console.log('eeeeeeeeeeeeee', payload))
    .map(payload => {
      return this.refreshTokenService.checkForTokenRefresh();
    })
    .map(payload => {
      console.log('oooooooooooooooo');
      return this.accountActions.CheckTokenForRefresh();
    });
    // .map(payload => this.store.dispatch(this.accountActions.CheckTokenForRefresh()));
    // .do(payload => this.refreshTokenService.checkForTokenRefresh());


}
