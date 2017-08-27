import { Observable } from 'rxjs/Observable';
import { AppState } from '../../../states/reducer.base';

export function getErrorMessagesSelector(state$: Observable<AppState>) {
  // contains the error message
  return state$.select(state => {
    return state.account.requestErrors;
  });
}

export function getUserLoggedInSelector(state$: Observable<AppState>) {
  // determines if the user is logged in
  return state$.select(state => {
    return state.account.loggedIn; });
}

