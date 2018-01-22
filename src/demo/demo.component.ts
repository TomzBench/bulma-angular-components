import { Component, Inject, ViewContainerRef } from '@angular/core';
import { BulmaModule } from '../bulma/bulma.module';

@Component({
  selector: 'demo-root',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  constructor(
    @Inject(BulmaModule) bulma: BulmaModule,
    @Inject(ViewContainerRef) v: ViewContainerRef
  ) {
    bulma.setRootElement(v);
  }
}
