import { Component, OnInit } from '@angular/core';
import { DocumentModelService } from 'src/app/models/document-model.service';
import { Section } from 'src/app/models/section.interface';

@Component({
  selector: 'app-document-main',
  templateUrl: './document-main.component.html',
  styleUrls: ['./document-main.component.css']
})
export class DocumentMainComponent {

  constructor(private document: DocumentModelService) { }

  getSections(): Section[] {
    return this.document.model.sections;
  }
}
