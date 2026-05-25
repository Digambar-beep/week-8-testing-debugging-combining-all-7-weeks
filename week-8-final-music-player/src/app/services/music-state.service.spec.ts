import { TestBed } from '@angular/core/testing';

import { MusicStateService } from './music-state.service';

describe('MusicStateService', () => {
  let service: MusicStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
