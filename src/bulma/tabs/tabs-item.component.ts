import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { BulmaTabsActiveContext } from './tabs-active.class';

/**
 * A list component dynamically created (For internal use)
 */
//@Component({
//  template: `
//  <li [ngClass]="{'is-active':data.active.label===data.label}">
//    <a (click)="data.whenClicked()">
//      <span *ngIf="data.icon" class="icon">
//        <i class="fa fa-{{data.icon}}"></i>
//      </span>
//      <span>{{data.label}}</span>
//    </a>
//  </li>
//  `
//})
//export class BulmaTabsItemListComponent implements OnInit {
//
//  data: BulmaTabsItemViewComponent;
//
//  constructor() {}
//  ngOnInit() {}
//
//}

/**
 * ###Usage
 * <div b-tabs>
 *   <div b-tabs-item="'Tab 0'">
 *   </div>
 *   <div b-tabs-item="'Tab 1'">
 *   </div>
 *   <div b-tabs-item="'Tab 2'">
 *   </div>
 * </div>
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
  //@Output() tabClick: EventEmitter < string > ;
  active: BulmaTabsActiveContext;
  //whenClicked(): void { this.tabClick.emit(this.label); }
  constructor() {}
  ngOnInit() {}

}
