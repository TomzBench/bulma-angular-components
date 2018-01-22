import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactory,
  ComponentFactoryResolver,
  HostBinding
} from '@angular/core';


@Component({
  selector: 'b-modal',
  template: `
  <div class="modal-background" (click)="close()">
    <ng-content>
    </ng-content>
  </div>
  `
})
export class BulmaModalComponent implements OnInit {
  @HostBinding('class.modal') classModal: boolean = true;
  @HostBinding('class.is-active') classActive: boolean;

  constructor() {}
  ngOnInit() {
    this.classActive = true;
  }

  close() {
    console.log('want close');
  }
}
