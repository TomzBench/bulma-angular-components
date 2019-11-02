import { Component, OnInit, Input, HostBinding } from "@angular/core";

import { BulmaInputDirective } from "../input/input.directive";

@Component({
  selector: "[b-field-horizontal]",
  templateUrl: "./field-horizontal.component.html"
})
export class BulmaFieldHorizontalComponent implements OnInit {
  constructor() {}
  @Input("b-field-horizontal") label: string;
  @Input() size: string;
  @HostBinding("class.field") hasField: boolean = true;
  @HostBinding("class.is-horizontal") hasHorizontal: boolean = true;

  getSize() {
    return this.size ? `is-${this.size}` : "is-medium";
  }

  ngOnInit() {}
}
