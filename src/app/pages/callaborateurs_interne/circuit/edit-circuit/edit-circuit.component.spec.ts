import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCircuitComponent } from './edit-circuit.component';

describe('EditCircuitComponent', () => {
  let component: EditCircuitComponent;
  let fixture: ComponentFixture<EditCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCircuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
