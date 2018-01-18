import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactory,
  ComponentFactoryResolver,
  HostBinding,
  OnInit,
  AfterContentInit
} from '@angular/core';

import { BulmaTabsItemDirective } from './tabs-item.directive';
import { BulmaTabsItemComponent } from './tabs-item.component';
import { BulmaTabsActiveContext } from './tabs-active.class';

@Component({
  selector: '[b-tabs]',
  template: `
  <ul>
    <ng-template #list>
    </ng-template>
  </ul>
  `
})
export class BulmaTabsComponent implements OnInit, AfterContentInit {

  /** IE [box]="true" **/
  @Input() box: boolean;

  /** IE: [align]="'center|left|right'" **/
  @Input() align: string;

  /** IE: [size]="'small|medium|large'" **/
  @Input() size: boolean;

  /** IE: [active]="active" **/
  @Input() active: string;

  @HostBinding('class.tabs') hasTabs: boolean = true;
  @ContentChildren(BulmaTabsItemDirective) tabs;
  @ViewChild("list", { read: ViewContainerRef }) container: ViewContainerRef;
  factory: ComponentFactory < BulmaTabsItemComponent > ;
  activeTab: BulmaTabsActiveContext = new BulmaTabsActiveContext();

  constructor(private _resolver: ComponentFactoryResolver) {
    this.factory = _resolver.resolveComponentFactory(BulmaTabsItemComponent);
  }
  ngOnInit() {}

  ngAfterContentInit() {
    this.tabs.forEach((tab: BulmaTabsItemDirective) => {
      let ref = this.container.createComponent(this.factory);
      ref.instance.data = tab;
      tab.tabClick.subscribe((label: string) => {
        this.activeTab.label = label;
      })
      tab.active = this.activeTab;
    });
  }

}
