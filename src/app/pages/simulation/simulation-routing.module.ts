// component
import { SimulationComponent } from './simulation.component';

// package
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SimulationComponent,
    data: { title: 'simulacao'} 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationRoutingModule { }
