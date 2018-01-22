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

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver_ = factoryResolver;
  }

  /** Pass your compoenent to open, make sure your component is an entry component*/
  open(v: ViewContainerRef, component: Type < any > ): ComponentRef < any > {
    console.log('click');
    let f = this.factoryResolver_.resolveComponentFactory(component);
    let r = v.createComponent(f);
    return r
  }

}
