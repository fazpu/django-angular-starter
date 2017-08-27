import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { routes } from './not-found404.routing';

import { NotFound404Component } from './not-found404.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [
        NotFound404Component
    ],
    providers: []
})

export class NotFound404Module { }
