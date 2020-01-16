import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist/checklist.component';

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UtilitiesModule } from "../utilities/utilities.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChecklistComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    UtilitiesModule
  ],
  exports: [ChecklistComponent]
})
export class SectionsModule { }
