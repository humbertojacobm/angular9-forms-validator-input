import { TestBed } from '@angular/core/testing';

import { UniqueAlterEgoValidator } from './unique-alter-ego-validator.service';

describe('UniqueAlterEgoValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueAlterEgoValidator = TestBed.get(UniqueAlterEgoValidator);
    expect(service).toBeTruthy();
  });
});
