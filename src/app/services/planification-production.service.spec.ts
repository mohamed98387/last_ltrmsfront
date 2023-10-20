import { TestBed } from '@angular/core/testing';

import { PlanificationProductionService } from './planification-production.service';

describe('PlanificationProductionService', () => {
  let service: PlanificationProductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanificationProductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
