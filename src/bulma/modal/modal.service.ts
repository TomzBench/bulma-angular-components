import {
  Injectable,
  Inject,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

@Injectable()
export class BulmaModalService {

  private root_: ViewContainerRef;
  private factoryResolver_: ComponentFactoryResolver;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver_ = factoryResolver;
  }

  /** Must set a parent element to append the modal too. IE inside your app component */
  setViewContainerRef(v: ViewContainerRef) {
    this.root_ = v;
  }

}
