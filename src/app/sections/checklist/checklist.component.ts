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
    this.model = new ChecklistModel("checklist1", 7, 5);
    this.model.items = ["a","b","c","d","e","f","g"];
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
}
