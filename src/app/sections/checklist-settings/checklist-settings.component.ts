import { Component, OnInit } from '@angular/core';
import { ChecklistModel } from 'src/app/models/checklist.model';
import { DocumentSettingsService } from 'src/app/models/document-settings.service';

@Component({
  selector: 'app-checklist-settings',
  templateUrl: './checklist-settings.component.html',
  styleUrls: ['./checklist-settings.component.css']
})
export class ChecklistSettingsComponent implements OnInit {

  constructor(
    private model: ChecklistModel,
    private settings: DocumentSettingsService
  ) { }

  ngOnInit() {
  }

  addItem() {
    this.model.items.push("");
  }

  removeLastItem() {
    this.model.items.pop();
  }

  get columns(): number {
    return this.model.columns;
  }

  set columns(col: number) {
    this.model.columns = col;
  }

  get points(): number {
    return this.model.points;
  }

  set points(pts: number) {
    this.model.points = pts;
  }

  get showPoints(): boolean {
    return this.settings.showPoints;
  }
}
