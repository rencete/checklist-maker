import { Component } from '@angular/core';

import { DocumentSettingsService } from 'src/app/models/document-settings.service';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-document-settings',
  templateUrl: './document-settings.component.html',
  styleUrls: ['./document-settings.component.css']
})
export class DocumentSettingsComponent {

  constructor(private settings: DocumentSettingsService) { }

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
