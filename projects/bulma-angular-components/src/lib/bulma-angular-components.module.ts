import { NgModule } from "@angular/core";
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
  BulmaSelectDirective,
  BulmaCheckboxComponent
} from "./forms";

@NgModule({
  imports: [CommonModule, BrowserModule],
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
    BulmaCheckboxComponent
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
    BulmaCheckboxComponent
  ],
  entryComponents: [
    // BulmaFieldComponent,
    // BulmaFieldHorizontalComponent,
    // BulmaInputComponent,
    // BulmaSelectComponent,
    // BulmaCheckboxComponent,
    // BulmaTextareaComponent,
    // BulmaTabsItemViewComponent
    // BulmaModalComponent
  ]
})
export class BulmaAngularComponentsModule {}
