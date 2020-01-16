import { Component } from '@angular/core';

import { ChecklistModel } from "../../models/checklist.model";

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  providers: [ChecklistModel]
})
export class ChecklistComponent {

  constructor(private model: ChecklistModel) {    
  }

  get items() {
    return this.model.items;
  }

  get columns() {
    return this.model.columns;
  }

  get length() {
    return this.model.length;
  }

  get title(): string {
    return this.model.title;
  }

  get points(): number {
    return this.model.points;
  }
}
