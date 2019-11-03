/**
 * Having a common base class for all form items (input/textarea/radio/etc)
 * allows ContentChild/ViewChild/QueryList classes to grab items more
 * generically.
 */

export type FormType = "input" | "select" | "textarea";

import { Type, ElementRef } from "@angular/core";
export abstract class BulmaFormBaseContext {
  classes: string;
  abstract formType: FormType;
  abstract setClasses(c: string);

  constructor() {}
}
