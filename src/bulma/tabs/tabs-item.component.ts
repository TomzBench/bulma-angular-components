import {
  Directive,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[b-tabs-item]'
})
export class BulmaTabsItemDirective implements OnInit {

  @Input('b-tabs-item') label: string;
  @Input() icon: string;

  constructor() {}
  ngOnInit() {}

}
