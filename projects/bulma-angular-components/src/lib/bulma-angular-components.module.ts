import { NgModule, ViewContainerRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BulmaAngularComponentsComponent } from "./bulma-angular-components.component";

import {
  BulmaNavComponent,
  BulmaNavBurgerComponent,
  BulmaNavMenuComponent
} from "./navbar/nav/nav.component";

import {
  BulmaNavBrandComponent,
  BulmaNavItemComponent,
  BulmaNavItemStartComponent,
  BulmaNavItemEndComponent
} from "./navbar/nav/nav.directive";

// Tabs
import {
  BulmaTabsComponent,
  BulmaTabsItemViewComponent
} from "./tabs/tabs.component";

// Forms
import { BulmaFieldComponent } from "./forms/field/field.component";
import { BulmaInputDirective } from "./forms/input/input.directive";
import { BulmaSelectDirective } from "./forms/select/select.directive";
import { BulmaTextareaDirective } from "./forms/textarea/textarea.directive";

// Modal
import { BulmaModalService } from "./modal/modal.service";
import { BulmaModalComponent } from "./modal/modal.component";

@NgModule({
  imports: [CommonModule, BrowserModule],
  providers: [BulmaModalService],
  declarations: [
    BulmaAngularComponentsComponent,
    BulmaNavComponent,
    BulmaNavBrandComponent,
    BulmaNavBurgerComponent,
    BulmaNavMenuComponent,
    BulmaNavItemComponent,
    BulmaNavItemStartComponent,
    BulmaNavItemEndComponent,
    BulmaTabsComponent,
    BulmaTabsItemViewComponent,
    BulmaFieldComponent,
    BulmaInputDirective,
    BulmaTextareaDirective,
    BulmaSelectDirective,
    BulmaModalComponent
  ],
  exports: [
    BulmaAngularComponentsComponent,
    BulmaNavComponent,
    BulmaNavBrandComponent,
    BulmaNavBurgerComponent,
    BulmaNavMenuComponent,
    BulmaNavItemComponent,
    BulmaNavItemStartComponent,
    BulmaNavItemEndComponent,
    BulmaTabsComponent,
    BulmaTabsItemViewComponent,
    BulmaFieldComponent,
    BulmaInputDirective,
    BulmaTextareaDirective,
    BulmaSelectDirective,
    BulmaModalComponent
  ],
  entryComponents: []
})
export class BulmaAngularComponentsModule {
  modalService: BulmaModalService;
  constructor(modalService: BulmaModalService) {
    this.modalService = modalService;
  }
  config(config: { view: ViewContainerRef }) {
    this.modalService.setView(config.view);
  }
}
