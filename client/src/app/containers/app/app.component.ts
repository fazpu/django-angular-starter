import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MOBILE } from '../../core/services/utils/constants';
import { views } from './app-nav-views';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppLayoutActions } from '../../core/states/layout/app.actions';
import { AppState } from '../../core/states/reducer.base';
import { AuthServiceMixin } from '../../core/modules/account/services/auth-base.service';


@Component({
  selector: 'my-app',
  styleUrls: ['../../../styles/main.scss', './app.component.scss'],
  templateUrl: './app.component.pug',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  showMonitor = (ENV === 'development' && !AOT &&
    ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
  );
  mobile = MOBILE;
  sideNavMode = MOBILE ? 'over' : 'side';
  views = views;
  menuOpened: Observable<boolean>;

  path: Observable<string>;
  menuClosedUrls = [];

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private appLayoutActions: AppLayoutActions,
    private auth: AuthServiceMixin,
    private store: Store<AppState>,

  ) {}

  ngOnInit() {
    // sidebar status - opened / closed
    this.store.select(s => s.router.path)
      .subscribe(path => this.checkSidebarStatus(path));
    this.menuOpened = this.store.select(s => s.layout.sidebarExpanded);

    // user status
    this.auth.getUserFromLocalStorage();
  }

  activateEvent(event) {
    if (ENV === 'development') {
      console.log('Activate Event:', event);
    }
  }

  deactivateEvent(event) {
    if (ENV === 'development') {
      console.log('Deactivate Event', event);
    }
  }

  checkSidebarStatus(path: string) {
    if (this.menuClosedUrls.indexOf(path) > -1) {
      return this.store.dispatch(this.appLayoutActions.collapseSidebar());
    }
  }

  toggleSidebar() {
    // this.menu.next();
    return this.store.dispatch(this.appLayoutActions.toggleSidebar());
  }

}
