import { Component, OnInit, AfterViewInit, HostBinding } from "@angular/core";

import { BulmaBaseContext } from "../base";

interface CheckboxContext {
  icon: string;
  class: string;
  help: string;
}

@Component({
  selector: "[b-checkbox]",
  template: `
    <div class="control" [ngClass]="{ 'has-icons-left': !!data.icon }">
      <label class="checkbox">
        <ng-content></ng-content>
      </label>
      <p class="help" [ngClass]="'is-' + data.class" ng-show="data.help">
        {{ data.help }}
      </p>
    </div>
  `,
  styles: []
})
export class BulmaCheckboxComponent implements OnInit {
  @HostBinding("class.field") hasField: boolean = true;
  data: CheckboxContext;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {}
}
