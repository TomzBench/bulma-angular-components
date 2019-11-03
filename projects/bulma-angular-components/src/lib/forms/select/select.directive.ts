import {
  Directive,
  forwardRef,
  OnInit,
  HostBinding,
  Input
} from "@angular/core";
import { BulmaFormBaseContext, FormType } from "../base";

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
  @HostBinding("class") classes = "";
  hasClass: boolean = false;
  formType: FormType = "select";

  setClasses(classes: string) {
    this.classes = classes + "";
  }

  ngOnInit() {}
}
