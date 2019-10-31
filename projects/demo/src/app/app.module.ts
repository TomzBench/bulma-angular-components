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

// There is some kind of typescript bug with the spread operator, so we
// combine entry components like this.  Doing differently will have ng build fail,
// and ng serve compile works after second try...
let entry = [].concat(DemoModalExample).concat(...entryComponents());
console.log(entry);

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
