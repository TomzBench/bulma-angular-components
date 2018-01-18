import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { BulmaTabsItemDirective } from './tabs-item.directive';

@Component({
  template: `
  <li [ngClass]="{'is-active':data.active.label===data.label}">
    <a (click)="data.whenClicked()">
      <span *ngIf="data.icon" class="icon">
        <i class="fa fa-{{data.icon}}"></i>
      </span>
      <span>{{data.label}}</span>
    </a>
  </li>
  `
})

export class BulmaTabsItemComponent implements OnInit {

  data: BulmaTabsItemDirective;

  constructor() {}
  ngOnInit() {}

}
