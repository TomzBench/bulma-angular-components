import {
  Component,
  HostBinding,
  HostListener,
  EventEmitter,
  Output,
  Input,
  OnInit,
  OnDestroy,
  AfterContentInit,
  ContentChild
} from "@angular/core";

//
// BulmaNavMenuComponent
//
@Component({
  selector: "[b-nav-menu]",
  template: `
    <div class="navbar-start">
      <ng-content select="[b-nav-item]"></ng-content>
      <ng-content select="[b-nav-item-start]"></ng-content>
    </div>
    <div class="navbar-end">
      <ng-content select="[b-nav-item-end]"></ng-content>
    </div>
  `,
  styles: []
})
export class BulmaNavMenuComponent implements OnInit {
  @HostBinding("class.navbar-menu") classMenu: boolean = true;
  @HostBinding("class.is-active") classActive: boolean;
  constructor() {}
  ngOnInit() {}

  whenActiveChange(a: boolean) {
    this.classActive = a;
  }
}

//
// BulmaNavBurgerComponent
//
@Component({
  selector: "[b-nav-burger]",
  template: `
    <span></span>
    <span></span>
    <span></span>
  `,
  styles: []
})
export class BulmaNavBurgerComponent implements OnInit {
  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean>;

  @HostBinding("class.navbar-burger") hasNavbarBurger: boolean = true;
  @HostBinding("class.burger") hasBurger: boolean = true;
  @HostBinding("class.is-active") classActive: boolean = false;

  constructor() {
    this.activeChange = new EventEmitter<boolean>();
  }

  ngOnInit() {}

  @HostListener("click", ["$event"])
  whenClicked(e) {
    this.classActive = this.active = !this.active;
    this.activeChange.emit(this.active);
  }
}

//
// BulmaNavComponent
//
@Component({
  selector: "[b-nav]",
  template: `
    <ng-content select="[b-nav-brand]"></ng-content>
    <ng-content select="[b-nav-menu]"></ng-content>
  `,
  styles: []
})
export class BulmaNavComponent implements OnInit {
  @HostBinding("class.navbar") classNavbar: boolean = true;
  @ContentChild(BulmaNavBurgerComponent, { static: false })
  burger: BulmaNavBurgerComponent;
  @ContentChild(BulmaNavMenuComponent, { static: false })
  menu: BulmaNavMenuComponent;

  ngOnInit() {}
  ngAfterContentInit() {
    if (this.burger) {
      this.burger.activeChange.subscribe((a: boolean) => {
        if (this.menu) this.menu.whenActiveChange(a);
      });
    }
  }

  ngOnDestroy() {
    if (this.burger) this.burger.activeChange.unsubscribe();
  }
}
