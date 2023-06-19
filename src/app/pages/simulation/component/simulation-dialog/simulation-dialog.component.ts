import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoanResponse } from '../../../../core/model/loan/loan-response';

@Component({
  selector: 'app-simulation-dialog',
  templateUrl: './simulation-dialog.component.html',
  styleUrls: ['./simulation-dialog.component.scss']
})
export class SimulationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: LoanResponse) { }

  ngOnInit(): void {
  }
}
