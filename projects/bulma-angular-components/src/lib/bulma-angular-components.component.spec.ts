import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaAngularComponentsComponent } from './bulma-angular-components.component';

describe('BulmaAngularComponentsComponent', () => {
  let component: BulmaAngularComponentsComponent;
  let fixture: ComponentFixture<BulmaAngularComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaAngularComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaAngularComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
