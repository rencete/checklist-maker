import { Injectable, OnInit } from '@angular/core';

import { DocumentModel } from './document.model';
import { DocumentDataSource } from './document-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentRepository {
  public documents: DocumentModel[] = [];

  constructor(ds: DocumentDataSource) { 
    ds.getDocuments().subscribe(documents => {
      this.documents = documents;
    })
  }

  getDocument(id: number): DocumentModel {
    return this.documents.find(doc => doc.id === id);
  }
}
