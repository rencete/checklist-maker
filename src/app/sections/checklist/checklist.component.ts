import { Component, Input, OnInit } from '@angular/core';

import { ChecklistSectionModel } from "../../models/section-models/checklist-section.model";
import { DocumentModelService } from 'src/app/document/document-model.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  @Input()
  sectionId: number;

  public model: ChecklistSectionModel;

  constructor(
    public document: DocumentModelService
  ) { }

  ngOnInit() {
    let section = this.document.getSection(this.sectionId);
    this.model = section ? section.model as ChecklistSectionModel : undefined;
  }
}
