import { Component } from '@angular/core';

import { ChecklistModel } from "../../models/checklist.model";

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent {
  private model: ChecklistModel;

  constructor() {
    this.model = new ChecklistModel("Checklist #1", 7, 5);
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
