import { TestBed } from '@angular/core/testing';

import { UniqueAlterEgoValidatorService } from './unique-alter-ego-validator.service';

describe('UniqueAlterEgoValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueAlterEgoValidatorService = TestBed.get(UniqueAlterEgoValidatorService);
    expect(service).toBeTruthy();
  });
});
