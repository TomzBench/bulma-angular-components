import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { BulmaTabsActiveContext } from './tabs-active.class';

/**
 */
@Component({
  template: `
  <li [ngClass]="{'is-active':data.active.label===data.label}">
    <a (click)="data.whenClicked()">
      <span *ngIf="data.icon" class="icon">
        <i class="fa fa-{{data.icon}}"></i>
      </span>
      <span>{{data.label}}</span>
    </a>
  </li>
  `
})
export class BulmaTabsItemListComponent implements OnInit {

  data: BulmaTabsItemViewComponent;

  constructor() {}
  ngOnInit() {}

}

/**
 */
@Component({
  selector: '[b-tabs-item]',
  template: `
  <ng-content *ngIf="active.label===label">
  </ng-content>
  `
})
export class BulmaTabsItemViewComponent implements OnInit {

  @Input('b-tabs-item') label: string;
  @Input() icon: string;
  @Output() tabClick: EventEmitter < string > ;
  active: BulmaTabsActiveContext;
  whenClicked(): void { this.tabClick.emit(this.label); }
  constructor() { this.tabClick = new EventEmitter < string > (); }
  ngOnInit() {}

}
