import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPlanificationsComponent } from './actions-planifications.component';

describe('ActionsPlanificationsComponent', () => {
  let component: ActionsPlanificationsComponent;
  let fixture: ComponentFixture<ActionsPlanificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsPlanificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPlanificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
