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
    BulmaTabsItemViewComponent
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
    BulmaTabsItemViewComponent
  ]
})
export class BulmaAngularComponentsModule {}
