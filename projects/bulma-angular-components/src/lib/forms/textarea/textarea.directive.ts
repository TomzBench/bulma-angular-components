import {
  Directive,
  forwardRef,
  OnInit,
  HostBinding,
  Input
} from "@angular/core";
import { BulmaFormBaseContext, FormType } from "../base";

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
  @HostBinding("class.textarea") hasClass: boolean = true;
  @HostBinding("class") classes = "textarea";
  formType: FormType = "textarea";

  setClasses(classes: string) {
    this.classes = classes + " textarea";
  }

  ngOnInit() {}
}
