import { TestBed } from '@angular/core/testing';

import { PreloadServiceService } from './preload-service.service';

describe('PreloadServiceService', () => {
  let service: PreloadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
