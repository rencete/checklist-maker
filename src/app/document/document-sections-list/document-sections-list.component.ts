import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { SectionTypes } from 'src/app/models/section-types';
import { DocumentSettingsService } from 'src/app/models/document-settings.service';

@Component({
  selector: 'app-document-sections-list',
  templateUrl: './document-sections-list.component.html',
  styleUrls: ['./document-sections-list.component.css']
})
export class DocumentSectionsListComponent implements OnInit {
  public sectionTypes: string[] = [];

  constructor(private settings: DocumentSettingsService) { }

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
}
