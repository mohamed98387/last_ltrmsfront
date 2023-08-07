import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgenceComponent } from './edit-agence.component';

describe('EditAgenceComponent', () => {
  let component: EditAgenceComponent;
  let fixture: ComponentFixture<EditAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
