import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DocumentSettingsComponent } from './document-settings/document-settings.component';
import { SectionsModule } from '../sections/sections.module';
import { DocumentMainComponent } from './document-main/document-main.component';
import { DocumentSectionsListComponent } from './document-sections-list/document-sections-list.component';
import { DeleteSectionConfirmDialogComponent } from './document-sections-list/delete-section-confirm-dialog.component';


@NgModule({
  declarations: [
    DocumentSettingsComponent,
    DocumentMainComponent,
    DocumentSectionsListComponent,
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
