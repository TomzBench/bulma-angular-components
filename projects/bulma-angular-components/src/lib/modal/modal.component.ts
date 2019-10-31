import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  AfterContentInit,
  ViewContainerRef,
  QueryList,
  ContentChild,
  ElementRef,
  ComponentFactory,
  ComponentFactoryResolver,
  EventEmitter,
  HostBinding,
  HostListener
} from "@angular/core";

import { BulmaModalService } from "./modal.service";

@Component({
  selector: "b-modal",
  template: `
    <div class="modal-background" (click)="close()"></div>
    <ng-content> </ng-content>
  `
})
export class BulmaModalComponent
  implements OnInit, AfterContentInit, OnDestroy {
  @HostBinding("class.modal") classModal: boolean = true;
  @HostBinding("class.is-active") classActive: boolean;

  modalService: BulmaModalService;
  close() {
    this.modalService.close();
  }

  constructor(@Inject(BulmaModalService) modalService) {
    this.modalService = modalService;
  }

  ngOnInit() {
    this.classActive = true;
  }

  ngOnDestroy() {}

  ngAfterContentInit() {}
}
