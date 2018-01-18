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
  BulmaTabsItemDirective,
  BulmaTabsItemComponent
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
    BulmaTabsItemDirective,
    BulmaTabsItemComponent
  ],
  exports: [
    BulmaFieldComponent,
    BulmaInputDirective,
    BulmaTabsComponent,
    BulmaTabsItemDirective,
    BulmaTabsItemComponent
  ],
  entryComponents: [
    BulmaFieldComponent,
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
    BulmaTabsItemComponent
  ]
})
export class BulmaModule {}
