import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';

@Component({
  template: `
  <label *ngIf="data.label" class="label">{{data.label}}</label>
  <div class="control" [ngClass]="
                       {'is-loading':data.loading,
                        'has-icons-left':!!data.icon,
                        'has-icons-right':data.loading||!!data.iconRight}">
    <ng-content></ng-content>
    <span *ngIf="!!data.icon" class="icon is-left"><i class="fa fa-{{data.icon}}"></i></span>
    <span *ngIf="!data.loading&&!!data.iconRight" class="icon is-right"><i class="fa fa-{{data.iconRight}}"></i></span>
  </div>
  `,
  styles: []
})
export class BulmaInputComponent implements OnInit {

  @HostBinding("class.field") hasField: boolean = true;
  constructor() {}

  ngOnInit() {}

}
