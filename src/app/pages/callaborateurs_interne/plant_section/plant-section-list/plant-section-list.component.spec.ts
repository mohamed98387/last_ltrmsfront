import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSectionListComponent } from './plant-section-list.component';

describe('PlantSectionListComponent', () => {
  let component: PlantSectionListComponent;
  let fixture: ComponentFixture<PlantSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantSectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
