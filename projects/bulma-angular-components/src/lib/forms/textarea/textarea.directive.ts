import {
  Directive,
  forwardRef,
  OnInit,
  HostBinding,
  Input
} from "@angular/core";
import { BulmaFormBaseContext } from "../base";

@Directive({
  selector: "[b-textarea]",
  providers: [
    {
      provide: BulmaFormBaseContext,
      useExisting: forwardRef(() => BulmaTextareaDirective)
    }
  ]
})
export class BulmaTextareaDirective extends BulmaFormBaseContext
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
