import {
  Component,
  ContentChild,
  OnInit,
  AfterViewInit,
  HostBinding
} from "@angular/core";

interface InputContext {
  label: string;
  size: string;
  class: string;
  icon: string;
  help: string;
  loading: boolean;
  iconRight: string;
}

import { BulmaBaseContext } from "../base";

@Component({
  template: `
    <label
      *ngIf="data.label"
      class="label {{ data.size && 'is-' + data.size }}"
    >
      {{ data.label }}
    </label>
    <div
      class="{{ 'control ' + (data.size && 'is-' + data.size) }}"
      [ngClass]="{
        'is-loading': data.loading,
        'has-icons-left': !!data.icon,
        'has-icons-right': data.loading || !!data.iconRight
      }"
    >
      <ng-content></ng-content>
      <span
        [ngClass]="data.size && 'is-' + data.size"
        *ngIf="!!data.icon"
        class="icon is-left"
      >
        <i class="fa fa-{{ data.icon }}"></i>
      </span>
      <span
        [ngClass]="data.size && 'is-' + data.size"
        *ngIf="!data.loading && !!data.iconRight"
        class="icon is-right"
      >
        <i class="fa fa-{{ data.iconRight }}"></i>
      </span>
      <p
        class="help"
        [ngClass]="data.class && 'is-' + data.class"
        ng-show="data.help"
      >
        {{ data.help }}
      </p>
    </div>
  `,
  styles: []
})
export class BulmaInputComponent implements OnInit, AfterViewInit {
  // TODO extend to use an icon directive to manage icon package types and size
  @HostBinding("class.field") hasField: boolean = true;
  data: InputContext;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {}
}
