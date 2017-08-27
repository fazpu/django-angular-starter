import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { routes } from './unauthorized-page.routing';

import { UnauthorizedPageComponent } from './unauthorized-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [
        UnauthorizedPageComponent
    ],
    providers: []
})

export class UnauthorizedPageModule { }
