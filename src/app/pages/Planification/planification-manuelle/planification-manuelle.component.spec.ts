import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationManuelleComponent } from './planification-manuelle.component';

describe('PlanificationManuelleComponent', () => {
  let component: PlanificationManuelleComponent;
  let fixture: ComponentFixture<PlanificationManuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificationManuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificationManuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
