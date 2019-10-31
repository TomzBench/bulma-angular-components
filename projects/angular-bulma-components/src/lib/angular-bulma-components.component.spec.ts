import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBulmaComponentsComponent } from './angular-bulma-components.component';

describe('AngularBulmaComponentsComponent', () => {
  let component: AngularBulmaComponentsComponent;
  let fixture: ComponentFixture<AngularBulmaComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBulmaComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBulmaComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
