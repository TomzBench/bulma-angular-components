import {
  Component,
  Directive,
  forwardRef,
  ElementRef,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

import { BulmaBaseContext } from '../base';
import { BulmaInputComponent } from './input.component';

/**
 * ### usage
 *
 * (See: ../field/field.component.ts)
 */
@Directive({
  selector: '[b-input]',
  providers: [{
    provide: BulmaBaseContext,
    useExisting: forwardRef(() => BulmaInputDirective)
  }]
})
export class BulmaInputDirective extends BulmaBaseContext implements OnInit {

  /** IE: [icon]="'user'" (or icon="user" for static binding) */
  @Input() icon: string;

  /** IE: [iconRight]="'check'" */
  @Input() iconRight: string;

  /** IE: [loading]="true" (default: false) */
  @Input() loading: boolean;

  /** IE [help]="'This email is invalid'" **/
  @Input() help: string;

  /** IE [class]="'danger'" **/
  class_: string;
  @Input()
  set class(value: string) {
    if (this[this.class_]) this[this.class_] = false;
    this.class_ = value;
    this[this.class_] = true;
  }
  get class(): string {
    return this.class_;
  }

  /** IE [class]="'extra smallsmall|large'" **/
  @Input() size: string;

  /** We add the bulma class to callers input element for them */
  @HostBinding("class.input") hasClass: boolean = true;
  @HostBinding("class.is-small") small: boolean;
  @HostBinding("class.is-medium") medium: boolean;
  @HostBinding("class.is-large") large: boolean;
  @HostBinding("class.is-success") success: boolean;
  @HostBinding("class.is-danger") danger: boolean;

  /** Internal use, set by the parent b-field component */
  label: string;

  /** Pass the component type and the calllers element to base class 
   * (used for dynamic rendering) */
  constructor(el: ElementRef) {
    super(BulmaInputComponent, el);
  }

  ngOnInit() {
    if (this.size) this[this.size] = true;
    if (this.class) this[this.class] = true;
  }
}
