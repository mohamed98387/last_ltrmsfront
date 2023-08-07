import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPlanificatinAndRecapComponent } from './gestion-planificatin-and-recap.component';

describe('GestionPlanificatinAndRecapComponent', () => {
  let component: GestionPlanificatinAndRecapComponent;
  let fixture: ComponentFixture<GestionPlanificatinAndRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPlanificatinAndRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPlanificatinAndRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
