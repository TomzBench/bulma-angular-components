import {
  Component,
  ContentChild,
  OnInit,
  AfterViewInit,
  HostBinding
} from '@angular/core';

import { BulmaBaseContext } from '../base';



@Component({
  selector: '[b-checkbox]',
  template: `
  <div class="control" [ngClass]="{'has-icons-left':!!data.icon}">
    <label class="checkbox">
      <ng-content></ng-content>
    </label>
    <p class="help" [ngClass]="'is-'+data.class" ng-show="data.help">{{data.help}}</p>
  </div>
  `,
  styles: []
})
export class BulmaCheckboxComponent implements OnInit {
  @HostBinding("class.field") hasField: boolean = true;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {}

}
