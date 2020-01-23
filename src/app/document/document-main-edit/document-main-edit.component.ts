import { Component, OnInit } from '@angular/core';
import { DocumentRepository } from 'src/app/models/document-repository.service';
import { SectionTypes } from "src/app/models/section-types";
import { Section } from 'src/app/models/section.interface';

@Component({
  selector: 'app-document-main-edit',
  templateUrl: './document-main-edit.component.html',
  styleUrls: ['./document-main-edit.component.css']
})
export class DocumentMainEditComponent {
  public sectionTypes = SectionTypes;

  constructor(private document: DocumentRepository) { }

  getSections(): Section[] {
    return this.document.model.sections;
  }
}
