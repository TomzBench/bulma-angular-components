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
} from '@angular/core';

import { BulmaNavBurgerComponent } from './nav-burger.component';
import { BulmaNavMenuComponent } from './nav-menu.component';

@Component({
  selector: '[b-nav]',
  template: `
    <ng-content></ng-content>
   `,
  styles: []
})
export class BulmaNavComponent implements OnInit, AfterContentInit {


  @HostBinding('class.navbar') classNavbar: boolean = true;
  @ContentChild(BulmaNavBurgerComponent) burger: BulmaNavBurgerComponent;
  @ContentChild(BulmaNavMenuComponent) menu: BulmaNavMenuComponent;

  ngOnInit() {}
  ngAfterContentInit() {
    if (this.burger) {
      console.log(this.menu);
      this.burger.activeChange.subscribe((a: boolean) => {
        if (this.menu) this.menu.whenActiveChange(a);
      });
    }
  }

  ngOnDestroy() {
    if (this.burger) this.burger.activeChange.unsubscribe();
  }

}
