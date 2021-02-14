import { TestBed } from '@angular/core/testing';

import { ClientUploadService } from './client-upload.service';

describe('ClientUploadService', () => {
  let service: ClientUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
