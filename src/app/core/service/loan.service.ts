// interface
import { LoanRequest } from '../model/loan/loan-request';
import { LoanResponse } from '../model/loan/loan-response';

// package
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  getSimulatedLoan(loan: LoanRequest): Observable<LoanResponse> {
    let loanInstallment = Number(((loan.requestValue * 1.05) / loan.installment).toFixed(2));

    let loanResponse: LoanResponse = {
      totalLoan: loan.installment * loanInstallment,
      installment: loanInstallment,
      qtdIntallment: loan.installment
    }

    return of(loanResponse)
  }
}
