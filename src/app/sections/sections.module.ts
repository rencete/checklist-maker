import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UtilitiesModule } from "../utilities/utilities.module";
import { ChecklistSectionViewComponent } from './checklist-section-view/checklist-section-view.component';
import { ChecklistSectionEditComponent } from './checklist-section-edit/checklist-section-edit.component';
import { HeaderSectionEditComponent } from './header-section-edit/header-section-edit.component';
import { QuestionsSectionEditComponent } from './questions-section-edit/questions-section-edit.component';
import { ChecklistSectionViewDataSource } from './checklist-section-view/checklist-section-view.datasource';
import { QuestionsSectionViewComponent } from './questions-section-view/questions-section-view.component';

@NgModule({
  declarations: [
    ChecklistSectionEditComponent,
    HeaderSectionEditComponent,
    QuestionsSectionEditComponent,
    ChecklistSectionViewComponent,
    QuestionsSectionViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    AngularMaterialModule,
    UtilitiesModule
  ],
  exports: [
    ChecklistSectionEditComponent,
    HeaderSectionEditComponent,
    QuestionsSectionEditComponent,
    ChecklistSectionViewComponent,
    QuestionsSectionViewComponent
  ]
})
export class SectionsModule { }
