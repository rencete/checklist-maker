import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DocumentSettingsComponent } from './document-settings/document-settings.component';
import { SectionsModule } from '../sections/sections.module';
import { DocumentMainComponent } from './document-main/document-main.component';
import { DocumentSectionsListComponent } from './document-sections-list/document-sections-list.component';


@NgModule({
  declarations: [
    DocumentSettingsComponent,
    DocumentMainComponent,
    DocumentSectionsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    SectionsModule
  ],
  exports: [
    DocumentMainComponent
  ]
})
export class DocumentModule { }
