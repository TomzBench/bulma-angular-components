import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ContentChildren,
  QueryList,
  AfterContentInit
} from "@angular/core";

import { BulmaInputDirective } from "../input/input.directive";

export type SIZE = "small" | "large";
export type CLASS = "info" | "danger" | "success";

@Component({
  selector: "[b-field]",
  templateUrl: "./field.component.html",
  styles: []
})
export class BulmaFieldComponent implements OnInit, AfterContentInit {
  constructor() {}
  @HostBinding("class.field") hasField: boolean = true;
  @ContentChildren(BulmaInputDirective) inputs: QueryList<BulmaInputDirective>;
  @Input("b-field") label: string;
  @Input() class: string;
  @Input() loading: boolean;
  @Input() size: string;
  @Input() icon: string;
  @Input() iconRight: string;
  @Input() help: string;

  getSize() {
    return this.size ? `is-${this.size}` : "";
  }

  getClass() {
    return this.class ? `is-${this.class}` : "";
  }

  ngOnInit() {}

  ngAfterContentInit() {
    this.inputs.toArray().forEach(input => {
      input.setClasses(this.getSize() + " " + this.getClass());
    });
  }
}
