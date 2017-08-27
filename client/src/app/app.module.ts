// Imports
import { ApplicationRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload';

import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { Store } from '@ngrx/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';

import { rootReducer } from './core/states/reducer.base';
import { StoreDevToolsModule } from './core/modules/devtools/store-devtools.module';

import { FlexLayoutModule } from '@angular/flex-layout';

// Visual module imports
import { MaterialModule } from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core';
import { CovalentMenuModule } from '@covalent/core';
import { CovalentNotificationsModule } from '@covalent/core';
import { CovalentMediaModule } from '@covalent/core';

// routes
import { routes } from './app.routing';
import { AppState } from './core/states/reducer.base';

// providers
import { AppLayoutActions } from './core/states/layout/app.actions';
import { AccountActions } from './core/modules/account/states/account.actions';
import { AccountHttpService } from './core/modules/account/services/account.http.service';
import { AuthServiceMixin } from './core/modules/account/services/auth-base.service';

// Declarations
import { AppComponent } from './containers/app/app.component';


const STORE_DEV_TOOLS_IMPORTS = [];
if (ENV === 'development' && !AOT &&
  ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
) STORE_DEV_TOOLS_IMPORTS.push(...[
  StoreDevtoolsModule.instrumentStore({
    monitor: useLogMonitor({
      visible: true,
      position: 'right'
    })
  })
]);


@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    HttpClientModule,
    // for 3rd party dependency only - material icons
    HttpModule,
    MaterialModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentMenuModule,
    CovalentNotificationsModule,

    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(rootReducer),
    STORE_DEV_TOOLS_IMPORTS,
    StoreDevToolsModule,

    FlexLayoutModule,

    IdlePreloadModule.forRoot(), // forRoot ensures the providers are only created once
    RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: IdlePreload }),
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  providers: [
              AccountHttpService,
              AccountActions,
              AppLayoutActions,
              AuthServiceMixin
  ]
})

export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private _store: Store<AppState>
  ) { }

  hmrOnInit(store) {
    if (!store || !store.rootState) return;

    // restore state by dispatch a SET_ROOT_STATE action
    if (store.rootState) {
      this._store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      });
    }

    if ('restoreInputValues' in store) { store.restoreInputValues(); }
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    this._store.take(1).subscribe(s => store.rootState = s);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
