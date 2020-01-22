import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UtilitiesModule } from "../utilities/utilities.module";
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistSettingsComponent } from './checklist-settings/checklist-settings.component';
import { SectionHeaderEditComponent } from './section-header-edit/section-header-edit.component';
import { QuestionsSectionEditComponent } from './questions-section-edit/questions-section-edit.component';

@NgModule({
  declarations: [
    ChecklistComponent, 
    ChecklistSettingsComponent,
    SectionHeaderEditComponent,
    QuestionsSectionEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    AngularMaterialModule,
    UtilitiesModule
  ],
  exports: [
    ChecklistComponent,
    ChecklistSettingsComponent,
    SectionHeaderEditComponent,
    QuestionsSectionEditComponent
  ]
})
export class SectionsModule { }
