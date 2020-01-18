import { Component } from '@angular/core';

import { DocumentModelService } from 'src/app/models/document-model.service';
import { DocumentModel } from 'src/app/models/document.model';

@Component({
  selector: 'app-document-head',
  templateUrl: './document-head.component.html',
  styleUrls: ['./document-head.component.css']
})
export class DocumentHeadComponent {

  constructor(private settings: DocumentModelService) { 
    //TODO: Delete this (temporary)
    let model = new DocumentModel("Test Checklist");
    this.settings.model = model;
  }

  get title(): string {
    return this.settings.model.title;
  }
  
  set title(val: string) {
    this.settings.model.title = val;
  }

  get editable(): boolean {
    return this.settings.model.editable;
  }

  set editable(val: boolean) {
    this.settings.model.editable = val;
  }

  get showPoints(): boolean {
    return this.settings.model.showPoints;
  }

  set showPoints(val: boolean) {
    this.settings.model.showPoints = val;
  }
}
