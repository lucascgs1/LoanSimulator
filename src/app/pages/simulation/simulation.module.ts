// component
import { FormComponent } from './component/form/form.component';
import { SimulationComponent } from './simulation.component';

// module
import { SimulationRoutingModule } from './simulation-routing.module';

// package
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [FormComponent, SimulationComponent],
  imports: [
    CommonModule,
    SimulationRoutingModule
  ]
})
export class SimulationModule { }
