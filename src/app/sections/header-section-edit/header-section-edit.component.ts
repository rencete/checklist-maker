import { Component, Input, OnInit } from '@angular/core';

import { HeaderSectionModel } from 'src/app/models/section-models/header-section.model';
import { DocumentModelService } from 'src/app/document/document-model.service';

@Component({
  selector: 'app-header-section-edit',
  templateUrl: './header-section-edit.component.html',
  styleUrls: ['./header-section-edit.component.css']
})
export class HeaderSectionEditComponent implements OnInit {
  @Input()
  sectionId: number;

  public model: HeaderSectionModel;

  constructor(
    public document: DocumentModelService
  ) { }

  ngOnInit() {
    let section = this.document.getSection(this.sectionId);
    this.model = section ? section.model as HeaderSectionModel : undefined;
  }
}
