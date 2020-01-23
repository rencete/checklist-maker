import { Component, Input, OnInit } from '@angular/core';

import { DocumentRepository } from 'src/app/models/document-repository.service';
import { HeaderSectionModel } from 'src/app/models/header-section.model';

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
    public document: DocumentRepository
  ) { }

  ngOnInit() {
    let section = this.document.model.getSection(this.sectionId);
    this.model = section ? section.model as HeaderSectionModel : undefined;
  }
}
