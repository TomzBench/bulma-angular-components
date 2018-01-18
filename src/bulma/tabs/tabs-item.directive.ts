import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[b-tabs-item]'
})
export class BulmaTabsItemDirective implements OnInit {

  @Input('b-tabs-item') label: string;
  @Input() icon: string;
  @Output() tabClick: EventEmitter < string > ;

  active: string;

  whenClicked(): void {
    console.log("clicked");
    this.tabClick.emit(this.label);
  }

  constructor() {
    this.tabClick = new EventEmitter < string > ();
  }
  ngOnInit() {}

}
