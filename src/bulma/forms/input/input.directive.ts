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
  @Input() class: string = "normal";

  /** IE [class]="'extra smallsmall|large'" **/
  @Input() size: string = "normal";

  /** We add the bulma class to callers input element for them */
  @HostBinding("class.input") hasClass: boolean = true;

  /** Internal use, set by the parent b-field component */
  label: string;

  /** Pass the component type and the calllers element to base class 
   * (used for dynamic rendering) */
  constructor(el: ElementRef) {
    super(BulmaInputComponent, el);
  }

  ngOnInit() {}
}
