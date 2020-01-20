import { Component, OnInit, Input } from '@angular/core';
import { ChecklistModel } from 'src/app/models/checklist.model';
import { DocumentModelService } from 'src/app/models/document-model.service';

@Component({
  selector: 'app-checklist-settings',
  templateUrl: './checklist-settings.component.html',
  styleUrls: ['./checklist-settings.component.css']
})
export class ChecklistSettingsComponent implements OnInit {
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

  addItem() {
    this.model.items.push("");
  }

  removeLastItem() {
    this.model.items.pop();
  }
}
