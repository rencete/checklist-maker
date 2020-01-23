import { Component } from '@angular/core';

import { DocumentModel } from 'src/app/models/document.model';
import { DocumentModelService } from '../document-model.service';

@Component({
  selector: 'app-document-settings-edit',
  templateUrl: './document-settings-edit.component.html',
  styleUrls: ['./document-settings-edit.component.css']
})
export class DocumentSettingsEditComponent {

  constructor(private document: DocumentModelService) { 
  }

  get title(): string {
    return this.document.model.title;
  }
  
  set title(val: string) {
    this.document.model.title = val;
  }

  get showPoints(): boolean {
    return this.document.model.showPoints;
  }

  set showPoints(val: boolean) {
    this.document.model.showPoints = val;
  }
}
