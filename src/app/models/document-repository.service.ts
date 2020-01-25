import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { DocumentModel } from './document.model';
import { DocumentDataSource } from './document-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentRepository {
  public documents: DocumentModel[] = [];
  public documentsUpdated$: Subject<DocumentModel[]>;

  constructor(ds: DocumentDataSource) { 
    this.documentsUpdated$ = new Subject<DocumentModel[]>();
    ds.getDocuments().subscribe(documents => {
      this.documents = documents;
      this.documentsUpdated$.next(this.documents);
    })
  }

  getDocument(id: number): DocumentModel {
    return this.documents.find(doc => doc.id === id);
  }
}
