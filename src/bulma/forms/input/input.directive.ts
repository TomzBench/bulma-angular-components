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

  /** Internal use, set by the parent b-field component */
  label: string;

  /** We add the bulma class to callers input element for them */
  @HostBinding("class.input") class: boolean = true;

  /** Pass the component type and the calllers element to base class 
   * (used for dynamic rendering) */
  constructor(el: ElementRef) {
    super(BulmaInputComponent, el);
  }

  ngOnInit() {}
}
