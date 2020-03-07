import { TestBed } from '@angular/core/testing';

import { SecurityProtectionService } from './security-protection.service';

describe('SecurityProtectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecurityProtectionService = TestBed.get(SecurityProtectionService);
    expect(service).toBeTruthy();
  });
});
