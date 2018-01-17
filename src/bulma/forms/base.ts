/**
 * Having a common base class for all form items (input/textarea/radio/etc)
 * allows ContentChild/ViewChild/QueryList classes to grab items more 
 * generically.
 */
import { Type, ElementRef } from '@angular/core';
export class BulmaBaseContext {
  data: any;

  constructor(
    public component: Type < any > ,
    public el: ElementRef) {

  }
}
