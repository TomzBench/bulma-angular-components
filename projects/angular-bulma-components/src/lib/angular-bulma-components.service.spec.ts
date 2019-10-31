import { TestBed } from '@angular/core/testing';

import { AngularBulmaComponentsService } from './angular-bulma-components.service';

describe('AngularBulmaComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularBulmaComponentsService = TestBed.get(AngularBulmaComponentsService);
    expect(service).toBeTruthy();
  });
});
