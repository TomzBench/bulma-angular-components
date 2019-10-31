import {
  Directive,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef,
  ElementRef,
  ViewContainerRef,
  ViewChild,
  ContentChild,
  ContentChildren,
  QueryList,
  HostBinding,
  Input,
  OnInit,
  AfterViewInit,
  AfterContentInit
} from "@angular/core";

import { BulmaBaseContext } from "../base";
import { BulmaFieldHorizontalComponent } from "./field-horizontal.component";

/**
 * ### usage
 *
 * Simple:
 *
 * <div b-field="Name>
 *   <input b-input
 *          [icon]="'user'"
 *          [iconRight]="'check'"
 *          [loading]="true">
 * </div>
 *
 * Horizontal 1 Input:
 *
 * <div b-field="Name>
 *   <input b-input
 *          [icon]="'user'"
 *          [iconRight]="'check'"
 *          [loading]="true">
 * </div>
 *
 * Horizontal 2 Inputs:
 *
 * <div b-field="Name"
 *      [horizontal]="true"
 *   <input b-input
 *          [icon]="'user'"
 *          [iconRight]="'check'"
 *          [loading]="true">
 *   <input b-input
 *          type="email"
 *          [icon]="'envelope'"
 *          [iconRight]="'check'"
 *          [loading]="false">
 * </div>
 */
@Component({
  selector: "[b-field]",
  template: `
    <ng-container #main> </ng-container>
  `,
  styles: []
})
export class BulmaFieldComponent implements OnInit, AfterContentInit {
  @Input("b-field") label: string;
  @Input() horizontal: boolean;
  @HostBinding("class.field") hasField: boolean = true;
  @ContentChildren(BulmaBaseContext) inputs: QueryList<BulmaBaseContext>;
  @ViewChild("main", { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  constructor(private _resolver: ComponentFactoryResolver) {}
  ngOnInit() {}
  ngAfterContentInit() {
    if (this.horizontal) {
      this.hasField = true;
      let factory: ComponentFactory<BulmaFieldHorizontalComponent>;
      let ref: ComponentRef<BulmaFieldHorizontalComponent>;
      factory = this._resolver.resolveComponentFactory(
        BulmaFieldHorizontalComponent
      );
      ref = this.container.createComponent(factory);
      ref.instance.inputs = this.inputs.toArray();
      ref.instance.label = this.label;
    } else {
      let factory: ComponentFactory<BulmaBaseContext>;
      let input = this.inputs.toArray()[0];
      factory = this._resolver.resolveComponentFactory(input.component);
      let ref = this.container.createComponent(factory, null, null, [
        [input.el.nativeElement]
      ]);
      ref.instance.data = input;
      ref.instance.data.label = this.label;
    }
  }
}
