import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
    selector: 'account-card',
    templateUrl: './account.card.component.pug',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AccountCardComponent {

    @Input('title') titleText: string;

    constructor() {}
}

