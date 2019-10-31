import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  Optional
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
  selector: 'b-tabs-item',
  template: `
  <ng-content *ngIf="active.idx===idx">
  </ng-content>
  `
})
export class BulmaTabsItemViewComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  idx: number;                  /*!< our idx */
  active: BulmaTabsActiveContext; /*!< Active idx */
  constructor() {}
  ngOnInit() {}

}
