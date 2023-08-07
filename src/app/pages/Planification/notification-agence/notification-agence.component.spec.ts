import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAgenceComponent } from './notification-agence.component';

describe('NotificationAgenceComponent', () => {
  let component: NotificationAgenceComponent;
  let fixture: ComponentFixture<NotificationAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
