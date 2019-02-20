import { TestBed } from '@angular/core/testing';

import { ContadorService } from './contador.service';

describe('ContadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContadorService = TestBed.get(ContadorService);
    expect(service).toBeTruthy();
  });
});
