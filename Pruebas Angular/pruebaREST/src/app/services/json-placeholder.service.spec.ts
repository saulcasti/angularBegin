import { TestBed } from '@angular/core/testing';

import { JsonPlaceholderService } from './json-placeholder.service';

describe('JsonPlaceholderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonPlaceholderService = TestBed.get(JsonPlaceholderService);
    expect(service).toBeTruthy();
  });
});
