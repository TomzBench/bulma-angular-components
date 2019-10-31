import { NgModule, ViewContainerRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BulmaAngularComponentsComponent } from "./bulma-angular-components.component";
import {
  BulmaNavComponent,
  BulmaNavBrandComponent,
  BulmaNavBurgerComponent,
  BulmaNavMenuComponent,
  BulmaNavItemComponent,
  BulmaNavItemStartComponent,
  BulmaNavItemEndComponent
} from "./navbar/nav";
import { BulmaTabsComponent, BulmaTabsItemViewComponent } from "./tabs";
import {
  BulmaFieldComponent,
  BulmaFieldHorizontalComponent,
  BulmaInputComponent,
  BulmaInputDirective,
  BulmaTextareaComponent,
  BulmaTextareaDirective,
  BulmaSelectComponent,
  BulmaSelectDirective
} from "./forms";
import { BulmaModalComponent, BulmaModalService } from "./modal";

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
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
    BulmaInputDirective,
    BulmaTextareaComponent,
    BulmaTextareaDirective,
    BulmaSelectComponent,
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
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
    BulmaInputDirective,
    BulmaTextareaComponent,
    BulmaTextareaDirective,
    BulmaSelectComponent,
    BulmaSelectDirective,
    BulmaModalComponent
  ]
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

export function entryComponents() {
  return [
    BulmaFieldComponent,
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
    BulmaSelectComponent,
    BulmaTabsItemViewComponent,
    BulmaTextareaComponent
  ];
}
