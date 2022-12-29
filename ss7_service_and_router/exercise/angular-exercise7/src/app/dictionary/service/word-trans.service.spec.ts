import { TestBed } from '@angular/core/testing';

import { WordTransService } from './word-trans.service';

describe('WordTransService', () => {
  let service: WordTransService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordTransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
