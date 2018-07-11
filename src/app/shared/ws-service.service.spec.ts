import { TestBed, inject } from '@angular/core/testing';

import { WsServiceService } from './ws-service.service';

describe('WsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsServiceService]
    });
  });

  it('should be created', inject([WsServiceService], (service: WsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
