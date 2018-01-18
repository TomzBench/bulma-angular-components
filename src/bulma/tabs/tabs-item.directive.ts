import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { BulmaTabsActiveContext } from './tabs-active.class';

@Directive({
  selector: '[b-tabs-item]'
})
export class BulmaTabsItemDirective implements OnInit {

  @Input('b-tabs-item') label: string;
  @Input() icon: string;
  @Output() tabClick: EventEmitter < string > ;
  active: BulmaTabsActiveContext;
  whenClicked(): void { this.tabClick.emit(this.label); }
  constructor() { this.tabClick = new EventEmitter < string > (); }
  ngOnInit() {}

}
