import {
  Component,
  ContentChild,
  OnInit,
  AfterViewInit,
  HostBinding
} from '@angular/core';

import { BulmaBaseContext } from '../base';



@Component({
  selector: 'b-select',
  template: `
  <label *ngIf="data.label" class="label {{data.size&&'is-'+data.size}}">
    {{data.label}}
  </label>
  <div class="'control" [ngClass]="{'is-loading':data.loading,
                                    'has-icons-left':!!data.icon}">
    <div class="select {{data.size&&'is-'+data.size}}
                       {{data.class&&'is-'+data.class}}">
      <ng-content></ng-content>
    </div>
    <span [ngClass]="data.size&&'is-'+data.size" *ngIf="!!data.icon" class="icon is-left">
      <i class="fa fa-{{data.icon}}"></i>
    </span>
    <p class="help" [ngClass]="'is-'+data.class" ng-show="data.help">{{data.help}}</p>
  </div>
  `,
  styles: []
})
export class BulmaSelectComponent implements OnInit {
  @HostBinding("class.field") hasField: boolean = true;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {}

}
