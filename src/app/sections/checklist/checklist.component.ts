import { Component } from '@angular/core';

import { ChecklistModel } from "../../models/checklist.model";
import { DocumentModelService } from 'src/app/models/document-model.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  providers: [ChecklistModel]
})
export class ChecklistComponent {

  constructor(
    private model: ChecklistModel,
    private settings: DocumentModelService
  ) {
  }

  get items(): string[] {
    return this.model.items;
  }

  get columns(): number {
    return this.model.columns;
  }

  get length(): number {
    return this.model.length;
  }

  get title(): string {
    return this.model.title;
  }

  get points(): number {
    return this.model.points;
  }

  get isEditable(): boolean {
    return this.settings.model.editable;
  }

  get showPoints(): boolean {
    return this.settings.model.showPoints;
  }
}
