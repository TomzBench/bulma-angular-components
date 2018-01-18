import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BulmaModule } from '../bulma/bulma.module'


import {
  DemoComponent,
  DemoInputComponent,
  DemoTextareaComponent,
  DemoTabsComponent
} from './';


@NgModule({
  declarations: [
    DemoComponent,
    DemoInputComponent,
    DemoTextareaComponent,
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
