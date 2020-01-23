import { Component, Input, OnInit } from '@angular/core';

import { ChecklistSectionModel } from "../../models/section-models/checklist-section.model";
import { DocumentRepository } from 'src/app/models/document-repository.service';
import { JsonPipe } from '@angular/common';

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
    public document: DocumentRepository
  ) { }

  ngOnInit() {
    let section = this.document.model.getSection(this.sectionId);
    this.model = section ? section.model as ChecklistSectionModel : undefined;
  }
}
