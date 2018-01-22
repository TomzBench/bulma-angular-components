import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, ViewContainerRef } from '@angular/core';
import { BulmaModule } from '../bulma/bulma.module'


import {
  DemoComponent,
  DemoInputComponent,
  DemoSelectComponent,
  DemoTextareaComponent,
  DemoCheckboxComponent,
  DemoTabsComponent,
  DemoModalComponent,
  DemoModalExample
} from './';


@NgModule({
  declarations: [
    DemoComponent,
    DemoInputComponent,
    DemoTextareaComponent,
    DemoSelectComponent,
    DemoCheckboxComponent,
    DemoTabsComponent,
    DemoModalComponent,
    DemoModalExample
  ],
  imports: [
    BrowserModule,
    BulmaModule
  ],
  providers: [],
  entryComponents: [
    DemoModalExample
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
