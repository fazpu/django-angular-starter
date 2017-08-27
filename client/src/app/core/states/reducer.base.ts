import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { routerReducer, RouterState } from '@ngrx/router-store';

import * as fromLayout from './layout/app.reducers';
import * as fromAccount from '../modules/account/states/account.reducers';

import { IAccountState } from '../modules/account/models';

const modules = {
  'layout': fromLayout,
  'account': fromAccount
};


// Main store state definition
export interface AppState {
  router: RouterState;
  account: IAccountState;
  layout: fromLayout.ISidebarState;
}

export const syncReducers = {
  // router reducer is a helper that combines RouterState and Action
  router: routerReducer,
  account: fromAccount.accountReducer,
  layout: fromLayout.appLayout
};


const deepCombineReducers = (allReducers: any) => {
  Object.getOwnPropertyNames(allReducers).forEach((prop) => {
    if (allReducers.hasOwnProperty(prop)
      && allReducers[prop] !== null
      && typeof allReducers[prop] !== 'function') {
      allReducers[prop] = deepCombineReducers(allReducers[prop]);
    }
  });
  return combineReducers(allReducers);
};

// initializes reducers
const createReducer = (asyncReducers = {}) => {
  let allReducers = { ...syncReducers, ...asyncReducers };
  return deepCombineReducers(allReducers);
};

// Generate a reducer to set the root state in dev mode for HMR
function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
}

// the state returns to the initial setup after logout
const resetOnLogout = (reducer: Function) => {
  return function (state, action) {
    let newState;
    if (action.type === '[ACCOUNT] LOGOUT') {
      newState = Object.assign({}, state);
      Object.keys(modules).forEach((key) => {
        newState[key] = modules[key]['initialState'];
      });
    }
    return reducer(newState || state, action);
  };
};

// development only
const DEV_REDUCERS = [stateSetter, storeFreeze];
// set in constants.js file of project root
if (['logger', 'both'].indexOf(STORE_DEV_TOOLS) !== -1) {
  DEV_REDUCERS.push(storeLogger());
}

const developmentReducer = compose(...DEV_REDUCERS, resetOnLogout);
const productionReducer = compose(resetOnLogout);

// root reducer / state
export function rootReducer(state: any, action: any, asyncReducer) {
  if (ENV !== 'development') {
    return productionReducer(createReducer(asyncReducer))(state, action);
  } else {
    return developmentReducer(createReducer(asyncReducer))(state, action);
  }
}

export function createNewRootReducer(reducer: any): ActionReducer<any> {
  return function (state, action) {
    return rootReducer(state, action, reducer);
  };
}
