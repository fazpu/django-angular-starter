/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/account/login',  pathMatch: 'full' },
  { path: 'account', loadChildren: './core/modules/account/account.module#AccountModule' },
  { path: 'page-not-found', loadChildren: './core/modules/not-found404/index#NotFound404Module' },
  { path: 'unauthorized-page', loadChildren: './core/modules/unauthorized-page/index#UnauthorizedPageModule' },
  { path: '**', redirectTo: '/page-not-found' }
];
