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
import { BulmaTextareaComponent } from './textarea.component';

@Directive({
  selector: '[b-textarea]',
  providers: [{
    provide: BulmaBaseContext,
    useExisting: forwardRef(() => BulmaTextareaDirective)
  }]
})
export class BulmaTextareaDirective extends BulmaBaseContext implements OnInit {

  /** IE: [loading]="true" (default: false) */
  @Input() loading: boolean;

  /** IE [help]="'This email is invalid'" **/
  @Input() help: string;

  /** IE: [icon]="'user'" (or icon="user" for static binding) */
  @Input() icon: string;

  /** IE [class]="'danger'" **/
  @Input() class: string;

  /** IE [class]="'extra smallsmall|large'" **/
  @Input() size: string;

  /** We add the bulma class to callers input element for them */
  @HostBinding("class.textarea") hasClass: boolean = true;
  @HostBinding("class.is-small") small: boolean;
  @HostBinding("class.is-medium") medium: boolean;
  @HostBinding("class.is-large") large: boolean;
  @HostBinding("class.is-success") success: boolean;
  @HostBinding("class.is-danger") danger: boolean;

  constructor(el: ElementRef) {
    super(BulmaTextareaComponent, el);
  }

  ngOnInit() {
    if (this.size) this[this.size] = true;
    if (this.class) this[this.class] = true;
  }

}
