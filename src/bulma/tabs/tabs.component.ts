import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  HostBinding,
  OnInit,
  AfterContentInit
} from '@angular/core';

import { BulmaTabsItemDirective } from './tabs-item.component';

@Directive({
  selector: 'b-tabs'
})
export class BulmaTabsDirective implements OnInit, AfterContentInit {

  @Input() active;
  @Output() activeChange: EventEmitter < BulmaTabsItemDirective > ;

  @ContentChildren(BulmaTabsItemDirective) tabs;
  constructor() {}
  ngOnInit() {}
  ngAfterContentInit() {
    console.log(this.tabs);
  }

}
