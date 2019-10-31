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
  selector: '[b-nav-brand]',
  template: `
  <ng-content>
  </ng-content>
   `,
  styles: []
})
export class BulmaNavBrandComponent implements OnInit {

  @HostBinding('class.navbar-brand') classBrand: boolean = true;
  constructor() {}
  ngOnInit() {}
}
