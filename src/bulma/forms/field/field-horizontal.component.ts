import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  ViewContainerRef,
  HostBinding,
  ComponentFactory,
  ComponentFactoryResolver
} from '@angular/core';
import { BulmaBaseContext } from '../base';

@Component({
  template: `
    <div *ngIf="label" class="field-label is-normal">
      <label class="label">{{label}}</label>
    </div>
    <div class="field-body">
      <ng-container #inputContainer>
      </ng-container>
    </div>
  `
})
export class BulmaFieldHorizontalComponent implements OnInit, AfterContentInit {

  @ViewChild('inputContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  @HostBinding("class.field") hasField: boolean = true;
  @HostBinding("class.is-horizontal") hasHorizontal: boolean = true;
  inputs: BulmaBaseContext[];
  label: string;

  // TODO - read size

  constructor(private _resolver: ComponentFactoryResolver) {}

  ngOnInit() {}
  ngAfterContentInit() {
    this.inputs.forEach((context) => {
      let factory = this._resolver.resolveComponentFactory(context.component);
      let ref = this.container.createComponent(
        factory,
        null,
        null, [
          [context.el.nativeElement]
        ]);
      ref.instance.data = context;
    });
  }

}
