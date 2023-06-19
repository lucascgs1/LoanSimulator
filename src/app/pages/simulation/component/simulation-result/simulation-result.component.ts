// component
import { LoanResponse } from '../../../../core/model/loan/loan-response';

// package
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SimulationDialogComponent } from '../simulation-dialog/simulation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulation-result',
  templateUrl: './simulation-result.component.html',
  styleUrls: ['./simulation-result.component.scss'],
})
export class SimulationResultComponent implements OnInit {
  @Input() simulation: LoanResponse;
  @Output() cleanForm = new EventEmitter();

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  resetForm() {
    this.cleanForm.emit({});
  }

  confirmLoan() {
    const dialogRef = this.dialog.open(SimulationDialogComponent, {
      data: this.simulation,
      minHeight: '40%',
      minWidth: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['home'], { queryParams: { sucess: 'true' } });
      }
    });
  }
}
