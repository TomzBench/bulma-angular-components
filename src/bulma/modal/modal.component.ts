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
} from '@angular/core';

import { BulmaModalService } from './modal.service';

@Component({ selector: 'b-modal-background', template: `` })
export class BulmaModalBackgroundComponent {
  @HostBinding('class.modal-background') classBackground: boolean = true;
  @HostListener('click')
  whenClicked() { this.closeEvent.emit(); }
  closeEvent: EventEmitter < void > ;
  constructor() { this.closeEvent = new EventEmitter < void > (); }
}

@Component({
  selector: 'b-modal',
  template: `
  <ng-content>
  </ng-content>
  `
})
export class BulmaModalComponent implements OnInit, AfterContentInit, OnDestroy {
  @HostBinding('class.modal') classModal: boolean = true;
  @HostBinding('class.is-active') classActive: boolean;
  @ContentChild(BulmaModalBackgroundComponent) backround: BulmaModalBackgroundComponent;

  modalService: BulmaModalService;

  constructor(@Inject(BulmaModalService) modalService) {
    this.modalService = modalService;
  }

  ngOnInit() { this.classActive = true; }

  ngOnDestroy() {
    if (this.backround) this.backround.closeEvent.unsubscribe();
  }

  ngAfterContentInit() {
    if (this.backround) {
      this.backround.closeEvent.subscribe(() => {
        this.backround.closeEvent.unsubscribe();
        this.modalService.close();
      })
    }
  }
}
