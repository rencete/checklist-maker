import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';

import { SectionTypes } from 'src/app/models/section-types';
import { DocumentSettingsService } from 'src/app/models/document-settings.service';
import { DeleteSectionConfirmDialogComponent } from './delete-section-confirm-dialog.component';

@Component({
  selector: 'app-document-sections-list',
  templateUrl: './document-sections-list.component.html',
  styleUrls: ['./document-sections-list.component.css']
})
export class DocumentSectionsListComponent implements OnInit {
  public sectionTypes: string[] = [];

  constructor(private settings: DocumentSettingsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getSectionTypes();
  }

  private getSectionTypes() {
    for (let type in SectionTypes) {
      if (typeof SectionTypes[type] === 'number') {
        this.sectionTypes.push(type);
      }
    }
  }

  addSection(type: SectionTypes) {
    this.settings.sections.push(type);
  }

  getSections(): SectionTypes[] {
    return this.settings.sections;
  }

  reorder(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.settings.sections, event.previousIndex, event.currentIndex);
  }

  deleteSection(index: number) {
    const dialogRef = this.dialog.open(DeleteSectionConfirmDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.settings.sections.splice(index, 1);
      }
    });
  }
}
