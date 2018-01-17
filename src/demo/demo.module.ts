import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BulmaModule } from '../bulma/bulma.module'


import { DemoComponent } from './demo.component';


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
