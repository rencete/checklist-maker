import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { ChecklistSectionModel, ChecklistItemModel, ChecklistPointTypes } from "../../models/section-models/checklist-section.model";
import { DocumentModelService } from 'src/app/document/document-model.service';
import { ChecklistSectionViewDataSource } from './checklist-section-view.datasource';

@Component({
  selector: 'app-checklist-section-view',
  templateUrl: './checklist-section-view.component.html',
  styleUrls: ['./checklist-section-view.component.css'],
  providers: [
    ChecklistSectionViewDataSource
  ],
})
export class ChecklistSectionViewComponent
  implements OnInit 
  {
  @ViewChild(MatTable, {static: false}) table: MatTable<ChecklistItemModel>;
  
  @Input()
  sectionId: number;

  public model: ChecklistSectionModel;
  displayedColumns: string[] = ['checkbox', 'text', 'points'];

  constructor(
    public document: DocumentModelService,
    public dataSource: ChecklistSectionViewDataSource
  ) { }

  ngOnInit() {
    let section = this.document.getSection(this.sectionId);
    this.model = section ? section.model as ChecklistSectionModel : undefined;
    this.generateDisplayColumns();
    this.dataSource.setData(this.model.items);
  }

  private generateDisplayColumns() {
    this.displayedColumns = [];
    // Checkboxes
    for(let num = 0; num < this.model.columns; num++) {
      this.displayedColumns.push("checkbox");
    }

    // Checkbox text
    this.displayedColumns.push("text");

    // Points area
    if(this.document.model.showPoints && this.model.pointsType != ChecklistPointTypes.perSection) {
      this.displayedColumns.push("points");
    }
  }
}
