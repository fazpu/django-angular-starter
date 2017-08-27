import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { AppLayoutActions } from './app.actions';

import { AppState, createNewRootReducer } from '../reducer.base';


export interface ISidebarState {
  sidebarExpanded: boolean;
}

const initialState: any = {
  sidebarExpanded: true,
};


export function appLayout (state: ISidebarState = initialState, action: Action): ISidebarState {
  switch (action.type) {
    case AppLayoutActions.SIDEBAR_EXPAND:
      return Object.assign({}, state, { sidebarExpanded: true });

    case AppLayoutActions.SIDEBAR_COLLAPSE:
      return Object.assign({}, state, { sidebarExpanded: false });

    case AppLayoutActions.SIDEBAR_TOGGLE:
      return Object.assign({}, state, { sidebarExpanded: !state.sidebarExpanded });

    default:
      return Object.assign({}, initialState, state);
  }
}

export const appLayoutRegister = {
  reducer: { appLayout },
  actions: AppLayoutActions
};

export function getSidebarExpanded($state: Observable<ISidebarState>) {
  return $state.select(state => state.sidebarExpanded);
}
