import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgenceComponent } from './add-agence.component';

describe('AddAgenceComponent', () => {
  let component: AddAgenceComponent;
  let fixture: ComponentFixture<AddAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
