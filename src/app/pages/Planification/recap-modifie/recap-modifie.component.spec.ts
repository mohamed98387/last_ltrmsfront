import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapModifieComponent } from './recap-modifie.component';

describe('RecapModifieComponent', () => {
  let component: RecapModifieComponent;
  let fixture: ComponentFixture<RecapModifieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapModifieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapModifieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
