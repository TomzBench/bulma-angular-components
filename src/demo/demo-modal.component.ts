import { Component, ViewContainerRef, Inject } from '@angular/core';
import { BulmaModalService } from '../bulma';
import { DemoModalExample } from './demo-modal-example.component';

@Component({
  selector: 'demo-modal',
  templateUrl: './demo-modal.component.html'
})
export class DemoModalComponent {
  viewContainer: ViewContainerRef;
  modalService: BulmaModalService;
  constructor(
    @Inject(ViewContainerRef) v: ViewContainerRef,
    @Inject(BulmaModalService) modalService: BulmaModalService) {
    this.viewContainer = v;
    this.modalService = modalService;
  }

  whenClicked() {
    this.modalService.open(this.viewContainer, DemoModalExample);
  }
}
