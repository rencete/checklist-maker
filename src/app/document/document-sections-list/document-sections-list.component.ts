import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';

import { SectionTypes } from 'src/app/models/section-types';
import { Section } from "src/app/models/section.interface";
import { DocumentModelService } from 'src/app/models/document-model.service';
import { DeleteSectionConfirmDialogComponent } from './delete-section-confirm-dialog.component';

@Component({
  selector: 'app-document-sections-list',
  templateUrl: './document-sections-list.component.html',
  styleUrls: ['./document-sections-list.component.css']
})
export class DocumentSectionsListComponent implements OnInit {
  public sectionTypeValues: string[] = [];
  public sectionTypes = SectionTypes;

  constructor(private settings: DocumentModelService, private dialog: MatDialog) { }

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
    this.settings.model.addSectionOfType(type);
  }

  getSections(): Section[] {
    return this.settings.model.sections;
  }

  reorder(event: CdkDragDrop<Section[]>) {
    moveItemInArray(this.settings.model.sections, event.previousIndex, event.currentIndex);
  }

  deleteSection(index: number) {
    const dialogRef = this.dialog.open(DeleteSectionConfirmDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.settings.model.sections.splice(index, 1);
      }
    });
  }
}
