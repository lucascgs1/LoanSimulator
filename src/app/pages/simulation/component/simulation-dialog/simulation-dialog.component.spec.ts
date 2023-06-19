import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationDialogComponent } from './simulation-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SimulationDialogComponent', () => {
  let component: SimulationDialogComponent;
  let fixture: ComponentFixture<SimulationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SimulationDialogComponent],
    });
    fixture = TestBed.createComponent(SimulationDialogComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
