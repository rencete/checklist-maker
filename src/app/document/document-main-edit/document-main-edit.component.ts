import { Component, OnInit } from '@angular/core';

import { DocumentRepository } from 'src/app/models/document-repository.service';
import { SectionTypes } from "src/app/models/section-types";
import { DocumentModelService } from '../document-model.service';

@Component({
  selector: 'app-document-main-edit',
  templateUrl: './document-main-edit.component.html',
  styleUrls: ['./document-main-edit.component.css']
})
export class DocumentMainEditComponent implements OnInit {
  public sectionTypes = SectionTypes;

  constructor(
    public repository: DocumentRepository,
    public document: DocumentModelService
  ) { }

  ngOnInit() {
    //TODO: Delete this (temporary)
    setTimeout(() => {
      let model = this.repository.getDocument(1);
      this.document.model = model;
    }, 3000);
  }
}
