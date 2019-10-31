import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BulmaAngularComponentsModule } from "bulma-angular-components";
import { DemoTabsComponent } from './demo-tabs/demo-tabs.component';

@NgModule({
  declarations: [AppComponent, DemoTabsComponent],
  imports: [BrowserModule, AppRoutingModule, BulmaAngularComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
