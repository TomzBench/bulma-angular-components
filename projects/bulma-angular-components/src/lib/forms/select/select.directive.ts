import {
  Directive,
  forwardRef,
  OnInit,
  HostBinding,
  Input
} from "@angular/core";
import { BulmaFormBaseContext } from "../base";

@Directive({
  selector: "[b-select]",
  providers: [
    {
      provide: BulmaFormBaseContext,
      useExisting: forwardRef(() => BulmaSelectDirective)
    }
  ]
})
export class BulmaSelectDirective extends BulmaFormBaseContext
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
