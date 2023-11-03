import { TestBed } from '@angular/core/testing';

import { PlanificationTransportService } from './planification-transport.service';

describe('PlanificationTransportService', () => {
  let service: PlanificationTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanificationTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
