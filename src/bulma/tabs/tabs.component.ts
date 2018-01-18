import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  HostBinding,
  OnInit,
  AfterContentInit
} from '@angular/core';

import { BulmaTabsItemDirective } from './tabs-item.component';

@Component({
  selector: '[b-tabs]',
  template: `
  <ul>
    <li *ngFor="let tab of tabs"
        [ngClass]="{'is-active':tab.active}">
      <a>
        <span *ngIf="tab.icon" class="icon"><i class="fa fa-{{icon}}"></i></span>
	<span>{{tab.label}}</span>
      </a>
    </li>
  </ul>
  <ng-template>
   <ng-content></ng-content>
  </ng-template>
  `
})
export class BulmaTabsComponent implements OnInit, AfterContentInit {

  /** 
   * Boxed(is-boxed)
   * Alignment(is-left,is-right,is-center)
   * size(is-small,is-medium,is-large)
   **/
  @Input() active;
  @Output() activeChange: EventEmitter < BulmaTabsItemDirective > ;

  @HostBinding('class.tabs') hasTabs: boolean = true;

  @ContentChildren(BulmaTabsItemDirective) tabs;
  constructor() {}
  ngOnInit() {}
  ngAfterContentInit() {
    console.log(this.tabs);
  }

}
