import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CellComponent } from './cell/cell.component';
import { FieldComponent } from './field.component';

const fieldRoute: Routes = [
  { path: '', component: FieldComponent }
];

@NgModule({
  declarations: [
    FieldComponent,
    CellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(fieldRoute)
  ],
  exports: [RouterModule]
})
export class FieldModule {

}
