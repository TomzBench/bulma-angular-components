import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BulmaFieldComponent,
  BulmaFieldHorizontalComponent,
  BulmaInputComponent,
  BulmaInputDirective
} from './forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BulmaFieldComponent,
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
  ],
  exports: [
    BulmaFieldComponent,
    BulmaFieldHorizontalComponent,
    BulmaInputComponent,
  ]
})
export class BulmaModule {}
