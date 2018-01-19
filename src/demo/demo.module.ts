import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BulmaModule } from '../bulma/bulma.module'


import {
  DemoComponent,
  DemoInputComponent,
  DemoSelectComponent,
  DemoTextareaComponent,
  DemoCheckboxComponent,
  DemoTabsComponent
} from './';


@NgModule({
  declarations: [
    DemoComponent,
    DemoInputComponent,
    DemoTextareaComponent,
    DemoSelectComponent,
    DemoCheckboxComponent,
    DemoTabsComponent
  ],
  imports: [
    BrowserModule,
    BulmaModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
