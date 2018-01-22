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

import { BulmaTabsComponent } from './tabs/tabs.component';
import { BulmaTabsItemViewComponent } from './tabs/tabs-item.component';

import {
  BulmaNavComponent,
  BulmaNavBrandComponent,
  BulmaNavBurgerComponent,
  BulmaNavMenuComponent,
  BulmaNavItemComponent,
  BulmaNavItemStartComponent,
  BulmaNavItemEndComponent
} from './nav';

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
    BulmaTextareaComponent,
    BulmaTextareaDirective,
    BulmaSelectComponent,
    BulmaSelectDirective,
    BulmaCheckboxComponent,
    BulmaNavComponent,
    BulmaNavBrandComponent,
    BulmaNavBurgerComponent,
    BulmaNavMenuComponent,
    BulmaNavItemComponent,
    BulmaNavItemStartComponent,
    BulmaNavItemEndComponent
  ],
  exports: [
    BulmaFieldComponent,
    BulmaInputDirective,
    BulmaTextareaDirective,
    BulmaSelectDirective,
    BulmaTabsComponent,
    BulmaTabsItemViewComponent,
    BulmaNavComponent,
    BulmaNavBrandComponent,
    BulmaNavBurgerComponent,
    BulmaNavMenuComponent,
    BulmaNavItemComponent,
    BulmaNavItemStartComponent,
    BulmaNavItemEndComponent
  ],
  entryComponents: [
    BulmaFieldComponent,
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
    BulmaSelectComponent,
    BulmaCheckboxComponent,
    BulmaTextareaComponent,
    BulmaTabsItemViewComponent
  ]
})
export class BulmaModule {}
