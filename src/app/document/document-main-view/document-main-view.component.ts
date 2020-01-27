import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SectionTypes } from "src/app/models/section-types";;
import { DocumentRepository } from 'src/app/models/document-repository.service';
import { DocumentModelService } from '../document-model.service';

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
    private activeRoute: ActivatedRoute
  ) {
    this.documentId = Number.parseInt(this.activeRoute.snapshot.params["id"])
    this.sub = this.repository.documentsUpdated$.subscribe(docs => {
      this.document.model = this.repository.getDocument(this.documentId);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
