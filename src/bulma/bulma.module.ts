import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BulmaFieldComponent,
  BulmaFieldHorizontalComponent,
  BulmaInputComponent,
  BulmaInputDirective,
  BulmaTextareaComponent,
  BulmaTextareaDirective,
  BulmaSelectComponent,
  BulmaSelectDirective,
  BulmaCheckboxComponent,
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
    BulmaTextareaDirective,
    BulmaSelectComponent,
    BulmaSelectDirective,
    BulmaCheckboxComponent,
  ],
  exports: [
    BulmaFieldComponent,
    BulmaInputDirective,
    BulmaTextareaDirective,
    BulmaSelectDirective,
    BulmaTabsComponent,
    BulmaTabsItemViewComponent,
    BulmaTabsItemListComponent
  ],
  entryComponents: [
    BulmaFieldComponent,
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
    BulmaSelectComponent,
    BulmaCheckboxComponent,
    BulmaTextareaComponent,
    BulmaTabsItemListComponent,
    BulmaTabsItemViewComponent
  ]
})
export class BulmaModule {}
