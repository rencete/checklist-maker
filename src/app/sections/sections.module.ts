import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UtilitiesModule } from "../utilities/utilities.module";
import { FormsModule } from '@angular/forms';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistSettingsComponent } from './checklist-settings/checklist-settings.component';

@NgModule({
  declarations: [
    ChecklistComponent, 
    ChecklistSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    UtilitiesModule
  ],
  exports: [ChecklistComponent]
})
export class SectionsModule { }
