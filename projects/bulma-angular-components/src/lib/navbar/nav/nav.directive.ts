import {
  Directive,
  HostBinding,
  HostListener,
  EventEmitter,
  Output,
  Input,
  OnInit
} from "@angular/core";

@Directive({ selector: "[b-nav-brand]" })
export class BulmaNavBrandComponent implements OnInit {
  @HostBinding("class.navbar-brand") classBrand: boolean = true;
  constructor() {}
  ngOnInit() {}
}

@Directive({ selector: "[b-nav-item]" })
export class BulmaNavItemComponent implements OnInit {
  @HostBinding("class.navbar-item") classBrand: boolean = true;
  constructor() {}
  ngOnInit() {}
}

@Directive({ selector: "[b-nav-item-start]" })
export class BulmaNavItemStartComponent extends BulmaNavItemComponent
  implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {}
}

@Directive({ selector: "[b-nav-item-end]" })
export class BulmaNavItemEndComponent extends BulmaNavItemComponent
  implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {}
}
