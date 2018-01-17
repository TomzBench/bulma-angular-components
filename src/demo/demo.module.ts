import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BulmaModule } from '../bulma/bulma.module'


import {
  DemoComponent,
  DemoInputComponent
} from './';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    BulmaModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
