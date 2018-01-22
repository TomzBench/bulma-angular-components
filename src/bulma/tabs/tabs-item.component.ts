import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { BulmaTabsActiveContext } from './tabs-active.class';

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
  active: BulmaTabsActiveContext;
  constructor() {}
  ngOnInit() {}

}
