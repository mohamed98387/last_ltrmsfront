import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlantSectionComponent } from './edit-plant-section.component';

describe('EditPlantSectionComponent', () => {
  let component: EditPlantSectionComponent;
  let fixture: ComponentFixture<EditPlantSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlantSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlantSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
