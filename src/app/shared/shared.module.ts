// component
import { HeaderComponent } from './components/layout/header/header.component';

// module
import { MaterialModule } from './material/material.module';

// package
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
  ],
  providers: [],
})
export class SharedModule {}
