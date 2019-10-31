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
import { DemoTextareaComponent } from "./demo-textarea/demo-textarea.component";
import { DemoModalComponent } from "./demo-modal/demo-modal.component";
import { DemoModalExample } from "./demo-modal/demo-modal-example.component";

// For some reason compile throws error when combining array is inside NgModule
let entry = [DemoModalExample, ...entryComponents()];

@NgModule({
  declarations: [
    AppComponent,
    DemoTabsComponent,
    DemoInputsComponent,
    DemoSelectComponent,
    DemoTextareaComponent,
    DemoModalComponent,
    DemoModalExample
  ],
  imports: [BrowserModule, AppRoutingModule, BulmaAngularComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: entry
})
export class AppModule {}
