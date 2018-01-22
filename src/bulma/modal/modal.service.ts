import {
  Injectable,
  Inject,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
  Type
} from '@angular/core';

@Injectable()
export class BulmaModalService {

  private root_: ViewContainerRef;
  private factoryResolver_: ComponentFactoryResolver;
  private ref_: ComponentRef < any > ;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver_ = factoryResolver;
  }

  /** Pass your compoenent to open, make sure your component is an entry component*/
  open(v: ViewContainerRef, component: Type < any > ): ComponentRef < any > {
    if (this.ref_) this.ref_.destroy;
    let f = this.factoryResolver_.resolveComponentFactory(component);
    this.ref_ = v.createComponent(f);
    return this.ref_;
  }

  close() {
    if (this.ref_) this.ref_.destroy();
  }

}
