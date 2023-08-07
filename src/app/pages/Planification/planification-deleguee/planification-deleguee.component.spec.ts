import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationDelegueeComponent } from './planification-deleguee.component';

describe('PlanificationDelegueeComponent', () => {
  let component: PlanificationDelegueeComponent;
  let fixture: ComponentFixture<PlanificationDelegueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificationDelegueeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificationDelegueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
