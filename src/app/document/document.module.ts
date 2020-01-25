import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DocumentSettingsEditComponent } from './document-settings-edit/document-settings-edit.component';
import { SectionsModule } from '../sections/sections.module';
import { DocumentMainEditComponent } from './document-main-edit/document-main-edit.component';
import { DocumentSectionsEditComponent } from './document-sections-edit/document-sections-edit.component';
import { DeleteSectionConfirmDialogComponent } from './document-sections-edit/delete-section-confirm-dialog.component';
import { DocumentsListViewComponent } from './documents-list-view/documents-list-view.component';
import { DocumentsListViewDataSource } from './documents-list-view/documents-list-view-datasource';


@NgModule({
  declarations: [
    DocumentSettingsEditComponent,
    DocumentMainEditComponent,
    DocumentSectionsEditComponent,
    DeleteSectionConfirmDialogComponent,
    DocumentsListViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    AngularMaterialModule,
    SectionsModule
  ],
  exports: [
    DocumentMainEditComponent,
    DocumentsListViewComponent
  ],
  providers: [
    DocumentsListViewDataSource
  ],
  entryComponents: [
    DeleteSectionConfirmDialogComponent
  ]
})
export class DocumentModule { }
