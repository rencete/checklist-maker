import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DocumentRepository } from 'src/app/models/document-repository.service';
import { SectionTypes } from "src/app/models/section-types";
import { DocumentModelService } from '../document-model.service';
import { Subscription } from 'rxjs';
import { DocumentModel } from 'src/app/models/document.model';

@Component({
  selector: 'app-document-main-edit',
  templateUrl: './document-main-edit.component.html',
  styleUrls: ['./document-main-edit.component.css']
})
export class DocumentMainEditComponent implements OnDestroy {
  public sectionTypes = SectionTypes;
  public documentId: number;
  public sub: Subscription;
  public mode: string = "edit";
  public loading: boolean = false;

  constructor(
    public repository: DocumentRepository,
    public document: DocumentModelService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    if (this.activeRoute.snapshot.params["mode"]) {
      this.mode = this.activeRoute.snapshot.params["mode"]
    }
    if (this.mode == "edit") {
      this.documentId = Number.parseInt(this.activeRoute.snapshot.params["id"])
      this.sub = this.repository.documentsUpdated$.subscribe(docs => {
        this.document.model = this.repository.getDocument(this.documentId);
      })
    } else {
      this.document.model = new DocumentModel();
    }
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  saveModel() {
    this.loading = true;
    if(!this.document.model.id) {
      // New Mode (save new document to DB)
      this.repository.addDocument(this.document.model).subscribe((doc) => {
        this.document.model = doc;
        this.loading = false;
        this.router.navigate(["/documents", "edit", this.document.model.id]);
      })
    } else {
      // Edit Mode (update document in DB)
      this.repository.updateDocument(this.document.model).subscribe((doc) => {
        this.loading = false;
      })
    }
  }
}
