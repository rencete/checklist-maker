import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';

import { SectionTypes } from 'src/app/models/section-types';
import { Section } from "src/app/models/section.interface";
import { DeleteSectionConfirmDialogComponent } from './delete-section-confirm-dialog.component';
import { DocumentModelService } from '../document-model.service';

@Component({
  selector: 'app-document-sections-edit',
  templateUrl: './document-sections-edit.component.html',
  styleUrls: ['./document-sections-edit.component.css']
})
export class DocumentSectionsEditComponent implements OnInit {
  public sectionTypeValues: string[] = [];
  public sectionTypes = SectionTypes;

  constructor(private document: DocumentModelService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getSectionTypes();
  }

  private getSectionTypes() {
    for (let type in SectionTypes) {
      if (this.sectionTypeValues.findIndex(str => str == type) < 0) {
        this.sectionTypeValues.push(type);
      }
    }
  }

  addSection(type: SectionTypes) {
    this.document.addSectionOfType(type);
  }

  getSections(): Section[] {
    return this.document.model.sections;
  }

  reorder(event: CdkDragDrop<Section[]>) {
    moveItemInArray(this.document.model.sections, event.previousIndex, event.currentIndex);
  }

  deleteSection(index: number) {
    const dialogRef = this.dialog.open(DeleteSectionConfirmDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.document.model.sections.splice(index, 1);
      }
    });
  }
}
