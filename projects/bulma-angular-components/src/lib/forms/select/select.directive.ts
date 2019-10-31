import {
  Component,
  Directive,
  forwardRef,
  ElementRef,
  HostBinding,
  Input,
  OnInit
} from "@angular/core";

import { BulmaBaseContext } from "../base";
import { BulmaSelectComponent } from "./select.component";

/**
 * ### usage
 *
 * (See: ../field/field.component.ts)
 */
@Directive({
  selector: "[b-select]",
  providers: [
    {
      provide: BulmaBaseContext,
      useExisting: forwardRef(() => BulmaSelectDirective)
    }
  ]
})
export class BulmaSelectDirective extends BulmaBaseContext implements OnInit {
  /** IE: [icon]="'user'" (or icon="user" for static binding) */
  @Input() icon: string;

  /** IE: [loading]="true" (default: false) */
  @Input() loading: boolean;

  /** IE [help]="'This email is invalid'" **/
  @Input() help: string;

  /** IE [class]="'danger'" **/
  @Input() class: string;

  /** IE [class]="'extra smallsmall|large'" **/
  @Input() size: string;

  /** Internal use, set by the parent b-field component */
  label: string;

  constructor(el: ElementRef) {
    super(BulmaSelectComponent, el);
  }
  ngOnInit() {
    if (this.size) this[this.size] = true;
    if (this.class) this[this.class] = true;
  }
}
