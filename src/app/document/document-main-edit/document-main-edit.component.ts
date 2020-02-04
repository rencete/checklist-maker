import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DocumentRepository } from 'src/app/models/document-repository.service';
import { SectionTypes } from "src/app/models/section-types";
import { DocumentModelService } from '../document-model.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-main-edit',
  templateUrl: './document-main-edit.component.html',
  styleUrls: ['./document-main-edit.component.css']
})
export class DocumentMainEditComponent implements OnInit, OnDestroy {
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

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
