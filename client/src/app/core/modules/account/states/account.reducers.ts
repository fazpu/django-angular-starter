import '@ngrx/core/add/operator/select';
import { Action } from '@ngrx/store';
import { AccountActions } from './account.actions';
import { IAccountState } from '../models';

const initialState: IAccountState = {
  loggedIn: false,
  isAdmin: false,
  user: { user_id: null, username: '', email: '', exp: '' },
  loading: false,
  requestErrors: []
};


export function accountReducer (state: IAccountState = initialState, action: Action): IAccountState {
  switch (action.type) {
    case AccountActions.REQUEST_START:
      return Object.assign({}, state, { loading: action.payload });

    case AccountActions.REQUEST_FINISH:
      return Object.assign({}, state, { loading: action.payload });

    case AccountActions.LOGIN_SUCCESS:
      return Object.assign({}, state, action.payload);

    case AccountActions.LOGIN_ERROR:
      return Object.assign({}, state, action.payload);

    case AccountActions.LOGOUT:
      return Object.assign({}, state, this.initialState );

    case AccountActions.REGISTRATION_SUCCESS:
      return Object.assign({}, state, action.payload);

    case AccountActions.REGISTRATION_ERROR:
      return Object.assign({}, state, action.payload);

    case AccountActions.CHANGE_PASSWORD_SUCCESS:
      return Object.assign({}, state, action.payload);

    case AccountActions.CHANGE_PASSWORD_ERROR:
      return Object.assign({}, state, action.payload);

    default:
      return Object.assign({}, initialState, state);
  }
}


export const accountRegister = {
  reducer: { accountReducer },
  actions: AccountActions
};

// export function getAccountState($state: Observable<IAccountState>) {
//   return $state.select(state => state.account);
// }
