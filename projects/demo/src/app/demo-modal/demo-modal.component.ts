import { Component, ViewContainerRef, Inject } from "@angular/core";
import { BulmaModalService } from "bulma-angular-components";
import { DemoModalExample } from "./demo-modal-example.component";

@Component({
  selector: "app-demo-modal",
  templateUrl: "./demo-modal.component.html"
})
export class DemoModalComponent {
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(ViewContainerRef) v: ViewContainerRef,
    @Inject(BulmaModalService) public modalService: BulmaModalService
  ) {
    /**
     * Must be called once somewhere in your application (IE in app.component)
     **/
    modalService.setView(v);
  }

  whenClicked() {
    this.modalService.open(DemoModalExample);
  }
}
