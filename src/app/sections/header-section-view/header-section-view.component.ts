import { Component, OnInit, Input } from '@angular/core';

import { DocumentModelService } from 'src/app/document/document-model.service';
import { HeaderSectionModel } from 'src/app/models/section-models/header-section.model';

@Component({
  selector: 'app-header-section-view',
  templateUrl: './header-section-view.component.html',
  styleUrls: ['./header-section-view.component.css']
})
export class HeaderSectionViewComponent implements OnInit {
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
