import { TestBed } from '@angular/core/testing';

import { BulmaAngularComponentsService } from './bulma-angular-components.service';

describe('BulmaAngularComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BulmaAngularComponentsService = TestBed.get(BulmaAngularComponentsService);
    expect(service).toBeTruthy();
  });
});
