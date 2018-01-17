import {
  Component,
  ContentChild,
  OnInit,
  AfterViewInit,
  HostBinding
} from '@angular/core';

import { BulmaBaseContext } from '../base';

@Component({
  template: `
  <label *ngIf="data.label" class="label">{{data.label}}</label>
  <div class="control" [ngClass]="
                       {'is-loading':data.loading,
                        'has-icons-left':!!data.icon,
                        'has-icons-right':data.loading||!!data.iconRight}">
    <ng-content></ng-content>
    <span [ngClass]="'is-'+data.size" *ngIf="!!data.icon" class="icon is-left">
      <i class="fa fa-{{data.icon}}"></i>
    </span>
    <span [ngClass]="'is-'+data.size" *ngIf="!data.loading&&!!data.iconRight" class="icon is-right">
      <i class="fa fa-{{data.iconRight}}"></i>
    </span>
    <p class="help" [ngClass]="'is-'+data.class" ng-show="data.help">{{data.help}}</p>
  </div>
  `,
  styles: []
})
export class BulmaInputComponent implements OnInit, AfterViewInit {

  @HostBinding("class.field") hasField: boolean = true;
  @ContentChild(BulmaBaseContext) input: BulmaBaseContext;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {}

}
