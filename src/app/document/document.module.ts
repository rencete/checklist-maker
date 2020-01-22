import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DocumentHeadComponent } from './document-head/document-head.component';
import { SectionsModule } from '../sections/sections.module';
import { DocumentMainComponent } from './document-main/document-main.component';
import { DocumentSectionsEditComponent } from './document-sections-edit/document-sections-edit.component';
import { DeleteSectionConfirmDialogComponent } from './document-sections-edit/delete-section-confirm-dialog.component';


@NgModule({
  declarations: [
    DocumentHeadComponent,
    DocumentMainComponent,
    DocumentSectionsEditComponent,
    DeleteSectionConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    AngularMaterialModule,
    SectionsModule
  ],
  exports: [
    DocumentMainComponent
  ],
  entryComponents: [
    DeleteSectionConfirmDialogComponent
  ]
})
export class DocumentModule { }
