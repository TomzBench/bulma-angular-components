import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  ViewChild,
  ViewContainerRef,
  QueryList,
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

  /** IE: [(active)]="active" (optional, will equal first tab by default) **/
  @Input() active: string;
  @Output() activeChange: EventEmitter < string > ;

  @HostBinding('class.tabs') hasTabs: boolean = true;
  @ContentChildren(BulmaTabsItemDirective) tabs: QueryList < BulmaTabsItemDirective > ;
  @ViewChild("list", { read: ViewContainerRef }) container: ViewContainerRef;
  factory: ComponentFactory < BulmaTabsItemComponent > ;
  activeTab: BulmaTabsActiveContext = new BulmaTabsActiveContext();

  constructor(private _resolver: ComponentFactoryResolver) {
    this.factory = _resolver.resolveComponentFactory(BulmaTabsItemComponent);
    this.activeChange = new EventEmitter < string > ();
  }
  ngOnInit() {}

  ngAfterContentInit() {
    this.activeTab.label = this.active || this.tabs.toArray()[0].label;
    this.tabs.forEach((tab: BulmaTabsItemDirective) => {
      let ref = this.container.createComponent(this.factory);
      ref.instance.data = tab;
      tab.tabClick.subscribe((label: string) => {
        this.activeTab.label = label;
        this.activeChange.emit(label);
      })
      tab.active = this.activeTab;
    });
  }

}
