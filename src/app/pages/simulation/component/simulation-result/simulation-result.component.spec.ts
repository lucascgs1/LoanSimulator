import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationResultComponent } from './simulation-result.component';
import { MatDialog } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('SimulationResultComponent', () => {
  let component: SimulationResultComponent;
  let fixture: ComponentFixture<SimulationResultComponent>;

  beforeEach(() => {
    const matDialogStub = () => ({
      open: (simulationDialogComponent, object) => ({
        afterClosed: () => ({ subscribe: f => f({}) })
      })
    });
    const routerStub = () => ({ navigate: (array, object) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SimulationResultComponent],
      providers: [
        { provide: MatDialog, useFactory: matDialogStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(SimulationResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('confirmLoan', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(matDialogStub, 'open').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      component.confirmLoan();
      expect(matDialogStub.open).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
