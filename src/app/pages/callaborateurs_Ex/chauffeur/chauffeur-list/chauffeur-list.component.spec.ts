import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeurListComponent } from './chauffeur-list.component';

describe('ChauffeurListComponent', () => {
  let component: ChauffeurListComponent;
  let fixture: ComponentFixture<ChauffeurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChauffeurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
