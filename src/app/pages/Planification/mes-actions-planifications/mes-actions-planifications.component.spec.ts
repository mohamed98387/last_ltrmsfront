import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesActionsPlanificationsComponent } from './mes-actions-planifications.component';

describe('MesActionsPlanificationsComponent', () => {
  let component: MesActionsPlanificationsComponent;
  let fixture: ComponentFixture<MesActionsPlanificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesActionsPlanificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesActionsPlanificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
