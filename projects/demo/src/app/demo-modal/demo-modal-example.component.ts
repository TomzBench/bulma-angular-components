import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  Inject
} from "@angular/core";
import { BulmaModalService } from "bulma-angular-components";

/** Don't forget to add me into your entry components **/

@Component({
  templateUrl: "./demo-modal-example.component.html",
  styleUrls: []
})
export class DemoModalExample implements OnInit, AfterViewInit {
  constructor(@Inject(BulmaModalService) public modalService) {}
  ngOnInit() {}

  ngAfterViewInit() {}
}
