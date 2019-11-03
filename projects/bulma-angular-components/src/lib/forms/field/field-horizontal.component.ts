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
import { BulmaFieldComponent } from "./field.component";

@Component({
  selector: "[b-field-horizontal]",
  templateUrl: "./field-horizontal.component.html"
})
export class BulmaFieldHorizontalComponent implements OnInit, AfterContentInit {
  constructor() {}
  @Input("b-field-horizontal") label: string;
  @Input() size: string;
  @HostBinding("class.field") hasField: boolean = true;
  @HostBinding("class.is-horizontal") hasHorizontal: boolean = true;
  @ContentChildren(BulmaFieldComponent) inputs: QueryList<BulmaFieldComponent>;

  getSize() {
    return this.size ? `is-${this.size}` : "is-normal";
  }

  ngOnInit() {}
  ngAfterContentInit() {
    if (!this.size) {
      this.size = this.inputs.first && this.inputs.first.size;
    }
  }
}
