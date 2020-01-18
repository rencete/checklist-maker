import { Component } from '@angular/core';

import { DocumentModelService } from 'src/app/models/document-model.service';

@Component({
  selector: 'app-document-head',
  templateUrl: './document-head.component.html',
  styleUrls: ['./document-head.component.css']
})
export class DocumentHeadComponent {

  constructor(private settings: DocumentModelService) { }

  get title(): string {
    return this.settings.title;
  }
  
  set title(val: string) {
    this.settings.title = val;
  }

  get editable(): boolean {
    return this.settings.editable;
  }

  set editable(val: boolean) {
    this.settings.editable = val;
  }

  get showPoints(): boolean {
    return this.settings.showPoints;
  }

  set showPoints(val: boolean) {
    this.settings.showPoints = val;
  }
}
