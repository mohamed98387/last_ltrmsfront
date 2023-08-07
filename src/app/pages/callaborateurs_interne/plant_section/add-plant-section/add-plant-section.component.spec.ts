import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantSectionComponent } from './add-plant-section.component';

describe('AddPlantSectionComponent', () => {
  let component: AddPlantSectionComponent;
  let fixture: ComponentFixture<AddPlantSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlantSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
