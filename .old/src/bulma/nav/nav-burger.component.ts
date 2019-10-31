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
  selector: '[b-nav-burger]',
  template: `
  <span></span>
  <span></span>
  <span></span>
   `,
  styles: []
})
export class BulmaNavBurgerComponent implements OnInit {

  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter < boolean > ;

  @HostBinding('class.navbar-burger') hasNavbarBurger: boolean = true;
  @HostBinding('class.burger') hasBurger: boolean = true;
  @HostBinding('class.is-active') classActive: boolean = false;

  constructor() {
    this.activeChange = new EventEmitter < boolean > ();
  }

  ngOnInit() {}

  @HostListener('click', ['$event'])
  whenClicked(e) {
    this.classActive = this.active = !this.active;
    this.activeChange.emit(this.active);
  }
}
