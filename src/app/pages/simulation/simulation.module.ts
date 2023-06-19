// component
import { SimulationComponent } from './simulation.component';
import { SimulationDialogComponent } from './component/simulation-dialog/simulation-dialog.component';
import { SimulationFormComponent } from './component/simulation-form/simulation-form.component';
import { SimulationResultComponent } from './component/simulation-result/simulation-result.component';

// module
import { SimulationRoutingModule } from './simulation-routing.module';
import { SharedModule } from '../../shared/shared.module';

// package
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    SimulationFormComponent,
    SimulationComponent,
    SimulationResultComponent,
    SimulationDialogComponent,
  ],
  imports: [
    CommonModule,
    SimulationRoutingModule,
    SharedModule,
    CurrencyMaskModule,
  ],
})
export class SimulationModule {}
