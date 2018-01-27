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
  private view_: ViewContainerRef;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver_ = factoryResolver;
  }

  /**
   * Must be called somewhere during your app init. We could do hacky things 
   * using native browser methods but this is more angular friendly 
   **/
  setView(v: ViewContainerRef) { this.view_ = v; }

  /** Pass your compoenent to open, make sure your component is an entry component*/
  open<T>(component: Type < T > ): ComponentRef < T > {
    if (!this.view_) {
      throw (
        "Please call BulmaModalService.setView(v:ViewContainerRef) from your " +
        "root component to initialize service!"
      );
    }
    if (this.ref_) this.ref_.destroy;
    let f = this.factoryResolver_.resolveComponentFactory(component);
    this.ref_ = this.view_.createComponent(f);
    return this.ref_;
  }

  close() {
    if (this.ref_) this.ref_.destroy();
  }

}
