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

import {
  BulmaTabsItemListComponent,
  BulmaTabsItemViewComponent
} from './tabs-item.component';
import { BulmaTabsActiveContext } from './tabs-active.class';

@Component({
  selector: '[b-tabs]',
  template: `
  <div class="tabs">
    <ul>
      <ng-template #list>
      </ng-template>
    </ul>
  </div>
  <ng-content></ng-content>
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

  @ContentChildren(BulmaTabsItemViewComponent) viewQuery: QueryList < BulmaTabsItemViewComponent > ;
  @ViewChild("list", { read: ViewContainerRef }) tabsList: ViewContainerRef;
  listFactory: ComponentFactory < BulmaTabsItemListComponent > ;
  viewFactory: ComponentFactory < BulmaTabsItemViewComponent > ;
  activeTab: BulmaTabsActiveContext = new BulmaTabsActiveContext();
  tabs: BulmaTabsItemViewComponent[];

  constructor(private _resolver: ComponentFactoryResolver) {
    this.listFactory = _resolver.resolveComponentFactory(BulmaTabsItemListComponent);
    this.viewFactory = _resolver.resolveComponentFactory(BulmaTabsItemViewComponent);
    this.activeChange = new EventEmitter < string > ();
  }
  ngOnInit() {}

  ngAfterContentInit() {
    this.tabs = this.viewQuery.toArray();
    this.activeTab.label = this.active || this.tabs[0].label;
    this.viewQuery.forEach((tab: BulmaTabsItemViewComponent) => {
      let listRef = this.tabsList.createComponent(this.listFactory);
      listRef.instance.data = tab;
      tab.active = this.activeTab;
      tab.tabClick.subscribe((label: string) => {
        this.activeTab.label = label;
        this.activeChange.emit(label);
      })
    });
  }

}
