import { Directive, OnInit, HostBinding, Input } from "@angular/core";
import { BulmaFormBaseContext } from "../base";

@Directive({ selector: "[b-input]" })
export class BulmaInputDirective extends BulmaFormBaseContext
  implements OnInit {
  constructor() {
    super();
  }
  @HostBinding("class.input") hasClass: boolean = true;
  @HostBinding("class") classes = "input";

  setClasses(classes: string) {
    this.classes = classes + " input";
  }

  ngOnInit() {}
}
