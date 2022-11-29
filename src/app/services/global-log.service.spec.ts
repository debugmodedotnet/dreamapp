import { TestBed } from '@angular/core/testing';

import { GlobalLogService } from './global-log.service';

describe('GlobalLogService', () => {
  let service: GlobalLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
