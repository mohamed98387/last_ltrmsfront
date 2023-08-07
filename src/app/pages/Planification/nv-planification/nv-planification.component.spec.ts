import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPlanificationComponent } from './nv-planification.component';

describe('NvPlanificationComponent', () => {
  let component: NvPlanificationComponent;
  let fixture: ComponentFixture<NvPlanificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvPlanificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvPlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
