import { Component, OnInit, Input } from '@angular/core';

import { DocumentModelService } from 'src/app/document/document-model.service';
import { QuestionsSectionModel } from 'src/app/models/section-models/questions-section.model';

@Component({
  selector: 'app-questions-section-view',
  templateUrl: './questions-section-view.component.html',
  styleUrls: ['./questions-section-view.component.css']
})
export class QuestionsSectionViewComponent implements OnInit {
  @Input()
  sectionId: number;

  public model: QuestionsSectionModel;

  constructor(
    public document: DocumentModelService
  ) { }

  ngOnInit() {
    let section = this.document.getSection(this.sectionId);
    this.model = section ? section.model as QuestionsSectionModel : undefined;
  }

}
