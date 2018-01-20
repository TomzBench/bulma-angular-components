import {
  Component,
  HostBinding,
  HostListener,
  EventEmitter,
  Output,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: '[b-nav-menu]',
  template: `
  <div class="navbar-start">
    <ng-content select="[b-nav-item]"></ng-content>
    <ng-content select="[b-nav-item-start]"></ng-content>
    <a class="navbar-item">start</a>
  </div>
  <div class="navbar-end">
    <ng-content select="[b-nav-item-end]"></ng-content>
    <a class="navbar-item">left</a>
  </div>
   `,
  styles: []
})
export class BulmaNavMenuComponent implements OnInit {

  @HostBinding('class.navbar-menu') classMenu: boolean = true;
  @HostBinding('class.is-active') classActive: boolean;
  constructor() {}
  ngOnInit() {}

  whenActiveChange(a: boolean) { this.classActive = a; }
}
