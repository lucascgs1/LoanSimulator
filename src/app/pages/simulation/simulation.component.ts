// component
import { SimulationFormComponent } from './component/simulation-form/simulation-form.component';

// interface
import { LoanRequest } from '../../core/model/loan/loan-request';
import { LoanResponse } from '../../core/model/loan/loan-response';

// service
import { LoanService } from '../../core/service/loan.service';

// package
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent implements OnInit {
  @ViewChild(SimulationFormComponent) form: SimulationFormComponent;
  public simulation: LoanResponse = null;

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
  }

  simulateLoan(loan: LoanRequest) {
    this.loanService.getSimulatedLoan(loan).subscribe((res) => {

      this.simulation = res;
    });
  }

  onCleanForm($event) {
    this.form.initForm();
    this.simulation = null;
  }
}
