import { TestBed } from '@angular/core/testing';

import { PlantSectionService } from './plant-section.service';

describe('PlantSectionService', () => {
  let service: PlantSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
