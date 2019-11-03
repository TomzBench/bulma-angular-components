import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ContentChildren,
  QueryList,
  AfterContentInit
} from "@angular/core";

// import { BulmaInputDirective } from "../input/input.directive";
import { BulmaFormBaseContext, FormType } from "../base";

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
  @ContentChildren(BulmaFormBaseContext) inputs: QueryList<
    BulmaFormBaseContext
  >;
  @Input("b-field") label: string;
  @Input() class: string;
  @Input() loading: boolean;
  @Input() size: string;
  @Input() icon: string;
  @Input() iconRight: string;
  @Input() help: string;
  formType: FormType;

  getSize() {
    return this.size ? `is-${this.size}` : "";
  }

  getClass() {
    return this.class ? `is-${this.class}` : "";
  }

  ngOnInit() {}

  ngAfterContentInit() {
    this.formType = this.inputs.first.formType;
    console.log(this.formType);
    this.inputs.toArray().forEach(input => {
      input.setClasses(this.getSize() + " " + this.getClass());
    });
  }
}
