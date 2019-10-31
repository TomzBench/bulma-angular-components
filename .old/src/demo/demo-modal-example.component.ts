import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BulmaModalComponent } from '../bulma';

/** Don't forget to add me into your entry components **/

@Component({
  templateUrl: './demo-modal-example.component.html',
  styleUrls: []
})
export class DemoModalExample implements OnInit, AfterViewInit {
  @ViewChild(BulmaModalComponent) modalService: BulmaModalComponent;

  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {}

}
