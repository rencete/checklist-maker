import { Component, OnInit } from '@angular/core';
import { DocumentModelService } from 'src/app/models/document-model.service';
import { SectionTypes } from "src/app/models/section-types";
import { Section } from 'src/app/models/section.interface';

@Component({
  selector: 'app-document-main',
  templateUrl: './document-main.component.html',
  styleUrls: ['./document-main.component.css']
})
export class DocumentMainComponent {
  public sectionTypes = SectionTypes;

  constructor(private document: DocumentModelService) { }

  getSections(): Section[] {
    return this.document.model.sections;
  }
}
