import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SectionTypes } from "src/app/models/section-types";;
import { DocumentRepository } from 'src/app/models/document-repository.service';
import { DocumentModelService } from '../document-model.service';
import { ChecklistSectionModel, ChecklistPointTypes } from 'src/app/models/section-models/checklist-section.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-document-main-view',
  templateUrl: './document-main-view.component.html',
  styleUrls: ['./document-main-view.component.css']
})
export class DocumentMainViewComponent implements OnDestroy {
  public sectionTypes = SectionTypes;
  public documentId: number;
  public sub: Subscription;

  constructor(
    public repository: DocumentRepository,
    public document: DocumentModelService,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) {
    this.documentId = Number.parseInt(this.activeRoute.snapshot.params["id"])
    this.sub = this.repository.documentsUpdated$.subscribe(docs => {
      this.document.model = this.repository.getDocument(this.documentId);
    })
    this.getTotalPoints();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getTotalPoints(): number {
    let total: number = 0;
    if(this.document.model) {
      this.document.model.sections.forEach((section) => {
        if(section.type == SectionTypes.Checklist) {
          let sectionModel = section.model as ChecklistSectionModel;
          if(sectionModel.pointsType == ChecklistPointTypes.perCheckbox) {
            total += sectionModel.points * sectionModel.items.length * sectionModel.columns;
          } else if(sectionModel.pointsType == ChecklistPointTypes.perItem) {
            sectionModel.items.forEach((item) => {
              total += item.points;
            })
          } else if(sectionModel.pointsType == ChecklistPointTypes.perSection) {
            total += sectionModel.points;
          }
        }
      })
    }
    return total;
  }

  goBackPreviousPage() {
    this.location.back();
  }
}
