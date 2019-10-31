import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {
  BulmaAngularComponentsModule,
  entryComponents
} from "bulma-angular-components";
import { DemoTabsComponent } from "./demo-tabs/demo-tabs.component";
import { DemoInputsComponent } from "./demo-inputs/demo-inputs.component";
import { DemoSelectComponent } from "./demo-select/demo-select.component";
import { DemoTextareaComponent } from './demo-textarea/demo-textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTabsComponent,
    DemoInputsComponent,
    DemoSelectComponent,
    DemoTextareaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BulmaAngularComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [].concat(entryComponents())
})
export class AppModule {}
