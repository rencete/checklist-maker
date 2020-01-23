import { Component } from '@angular/core';

import { DocumentRepository } from 'src/app/models/document-repository.service';
import { DocumentModel } from 'src/app/models/document.model';

@Component({
  selector: 'app-document-settings-edit',
  templateUrl: './document-settings-edit.component.html',
  styleUrls: ['./document-settings-edit.component.css']
})
export class DocumentSettingsEditComponent {

  constructor(private repository: DocumentRepository) { 
    //TODO: Delete this (temporary)
    let model = new DocumentModel("Test Checklist");
    this.repository.model = model;
  }

  get title(): string {
    return this.repository.model.title;
  }
  
  set title(val: string) {
    this.repository.model.title = val;
  }

  get editable(): boolean {
    return this.repository.model.editable;
  }

  set editable(val: boolean) {
    this.repository.model.editable = val;
  }

  get showPoints(): boolean {
    return this.repository.model.showPoints;
  }

  set showPoints(val: boolean) {
    this.repository.model.showPoints = val;
  }
}
