import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UtilitiesModule } from "../utilities/utilities.module";
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistSectionEditComponent } from './checklist-section-edit/checklist-section-edit.component';
import { HeaderSectionEditComponent } from './header-section-edit/header-section-edit.component';
import { QuestionsSectionEditComponent } from './questions-section-edit/questions-section-edit.component';

@NgModule({
  declarations: [
    ChecklistComponent, 
    ChecklistSectionEditComponent,
    HeaderSectionEditComponent,
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
    ChecklistSectionEditComponent,
    HeaderSectionEditComponent,
    QuestionsSectionEditComponent
  ]
})
export class SectionsModule { }
