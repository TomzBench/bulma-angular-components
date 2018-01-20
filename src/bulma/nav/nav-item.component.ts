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
  selector: '[b-nav-item-start]',
  template: `
  <ng-content></ng-content>
   `,
  styles: []
})
export class BulmaNavItemStartComponent implements OnInit {

  @HostBinding('class.navbar-item') classMenu: boolean = true;
  constructor() {}
  ngOnInit() {}
}

@Component({
  selector: '[b-nav-item-end]',
  template: `
  <ng-content></ng-content>
   `,
  styles: []
})
export class BulmaNavItemEndComponent implements OnInit {
  @HostBinding('class.navbar-item') classMenu: boolean = true;
  constructor() {}
  ngOnInit() {}
}
