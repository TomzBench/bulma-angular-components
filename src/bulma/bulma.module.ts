import { NgModule, Inject, ViewContainerRef } from '@angular/core';
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
  BulmaNavComponent,
  BulmaNavBrandComponent,
  BulmaNavBurgerComponent,
  BulmaNavMenuComponent,
  BulmaNavItemComponent,
  BulmaNavItemStartComponent,
  BulmaNavItemEndComponent
} from './nav';

import { BulmaTabsComponent } from './tabs/tabs.component';
import { BulmaTabsItemViewComponent } from './tabs/tabs-item.component';

import { BulmaModalComponent } from './modal/modal.component';
import { BulmaModalService } from './modal/modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BulmaModalService
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
    BulmaNavItemEndComponent,
    BulmaModalComponent,
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
    BulmaTabsItemViewComponent,
    BulmaModalComponent
  ]
})
export class BulmaModule {
  modalService: BulmaModalService;
  constructor(@Inject(BulmaModalService) modalService) { this.modalService = modalService; }
  setRootElement(v: ViewContainerRef) { this.modalService.setViewContainerRef(v) };
}
