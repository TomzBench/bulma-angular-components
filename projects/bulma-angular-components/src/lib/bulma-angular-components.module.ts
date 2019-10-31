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
  BulmaSelectDirective
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
    BulmaSelectDirective
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
    BulmaSelectDirective
  ]
})
export class BulmaAngularComponentsModule {}

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
