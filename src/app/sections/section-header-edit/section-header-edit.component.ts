import { Component, Input, OnInit } from '@angular/core';

import { DocumentModelService } from 'src/app/models/document-model.service';
import { SectionHeaderModel } from 'src/app/models/section-header.model';

@Component({
  selector: 'app-section-header-edit',
  templateUrl: './section-header-edit.component.html',
  styleUrls: ['./section-header-edit.component.css']
})
export class SectionHeaderEditComponent implements OnInit {
  @Input()
  sectionId: number;

  public model: SectionHeaderModel;

  constructor(
    public document: DocumentModelService
  ) { }

  ngOnInit() {
    let section = this.document.model.getSection(this.sectionId);
    this.model = section ? section.model as SectionHeaderModel : undefined;
  }
}
