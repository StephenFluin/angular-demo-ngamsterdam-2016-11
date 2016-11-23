import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { MaterialModule } from '@angular/material';


import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LazyComponent}
    ]),
    MaterialModule,
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
