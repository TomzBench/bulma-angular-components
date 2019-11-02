/**
 * Having a common base class for all form items (input/textarea/radio/etc)
 * allows ContentChild/ViewChild/QueryList classes to grab items more
 * generically.
 */
import { Type, ElementRef } from "@angular/core";
export abstract class BulmaFormBaseContext {
  classes: string;
  abstract setClasses(c: string);

  constructor() {}
}
