import { Component, Input, OnInit } from '@angular/core';

import { ChecklistModel } from "../../models/checklist.model";
import { DocumentModelService } from 'src/app/models/document-model.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  @Input()
  sectionId: number;

  public model: ChecklistModel;

  constructor(
    public document: DocumentModelService
  ) { }

  ngOnInit() {
    let section = this.document.model.getSection(this.sectionId);
    this.model = section ? section.model : undefined;
  }
}
