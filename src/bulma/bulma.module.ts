import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BulmaFieldComponent,
  BulmaFieldHorizontalComponent,
  BulmaInputComponent,
  BulmaInputDirective,
  BulmaTextareaComponent,
  BulmaTextareaDirective
} from './forms';

import {
  BulmaTabsComponent,
  BulmaTabsItemViewComponent,
  BulmaTabsItemListComponent
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
    BulmaTabsItemViewComponent,
    BulmaTabsItemListComponent,
    BulmaTextareaComponent,
    BulmaTextareaDirective
  ],
  exports: [
    BulmaFieldComponent,
    BulmaInputDirective,
    BulmaTextareaDirective,
    BulmaTabsComponent,
    BulmaTabsItemViewComponent,
    BulmaTabsItemListComponent
  ],
  entryComponents: [
    BulmaFieldComponent,
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
    BulmaTextareaComponent,
    BulmaTabsItemListComponent,
    BulmaTabsItemViewComponent
  ]
})
export class BulmaModule {}
