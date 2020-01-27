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

@NgModule({
  declarations: [
    ChecklistSectionEditComponent,
    HeaderSectionEditComponent,
    QuestionsSectionEditComponent,
    ChecklistSectionViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    AngularMaterialModule,
    UtilitiesModule
  ],
  providers: [
    ChecklistSectionViewDataSource
  ],
  exports: [
    ChecklistSectionEditComponent,
    HeaderSectionEditComponent,
    QuestionsSectionEditComponent,
    ChecklistSectionViewComponent
  ]
})
export class SectionsModule { }
