import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BulmaFieldComponent,
  BulmaFieldHorizontalComponent,
  BulmaInputComponent,
  BulmaInputDirective
} from './forms';

import {
  BulmaTabsComponent,
  BulmaTabsItemDirective
} from './tabs';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BulmaFieldComponent,
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
    BulmaInputDirective,
    BulmaTabsComponent,
    BulmaTabsItemDirective
  ],
  exports: [
    BulmaFieldComponent,
    BulmaInputDirective,
    BulmaTabsComponent,
    BulmaTabsItemDirective
  ],
  entryComponents: [
    BulmaFieldComponent,
    BulmaFieldHorizontalComponent,
    BulmaInputComponent
  ]
})
export class BulmaModule {}
