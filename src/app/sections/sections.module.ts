import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist/checklist.component';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

@NgModule({
  declarations: [ChecklistComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [ChecklistComponent]
})
export class SectionsModule { }
