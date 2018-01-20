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
  selector: '[b-nav-item]',
  template: `
  <ng-content></ng-content>
   `,
  styles: []
})
export class BulmaNavItemComponent implements OnInit {

  @HostBinding('class.navbar-item') classMenu: boolean = true;
  constructor() {}
  ngOnInit() {}
}


@Component({
  selector: '[b-nav-item-start]',
  template: `
  <ng-content></ng-content>
   `,
  styles: []
})
export class BulmaNavItemStartComponent extends BulmaNavItemComponent implements OnInit {

  constructor() {
    super();
  }
  ngOnInit() {}
}

@Component({
  selector: '[b-nav-item-end]',
  template: `
  <ng-content></ng-content>
   `,
  styles: []
})
export class BulmaNavItemEndComponent extends BulmaNavItemComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {}
}
