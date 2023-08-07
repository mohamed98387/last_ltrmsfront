import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlanificationComponent } from './detail-planification.component';

describe('DetailPlanificationComponent', () => {
  let component: DetailPlanificationComponent;
  let fixture: ComponentFixture<DetailPlanificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPlanificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
