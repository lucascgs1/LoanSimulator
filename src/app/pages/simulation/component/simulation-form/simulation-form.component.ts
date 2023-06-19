// model
import { LoanRequest } from '../../../../core/model/loan/loan-request';

// package
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.scss'],
})
export class SimulationFormComponent implements OnInit {
  @Input() simulated: boolean = false;
  @Output() loanRequest = new EventEmitter();

  public requestForm: FormGroup = this.initForm();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.requestForm = this.initForm();
  }

  public initForm() {
    this.simulated = false;

    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      requestValue: [
        null,
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(18),
        ],
      ],
      installment: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.requestForm.invalid) {
      return;
    } else {
      let retorno: LoanRequest = {
        installment: Number(this.requestForm.value['installment']),
        name: this.requestForm.value['name'],
        requestValue: Number(this.requestForm.value['requestValue']),
      };

      this.loanRequest.emit(retorno);
    }
  }

  resetForm() {
    this.requestForm = this.initForm();

    this.requestForm.reset();
  }
}
