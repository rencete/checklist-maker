import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { DocumentModel } from './document.model';
import { DocumentDataSource } from './document-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentRepository {
  public documents: DocumentModel[] = [];
  public documentsUpdated$: BehaviorSubject<DocumentModel[]>;

  constructor(private ds: DocumentDataSource) { 
    this.documentsUpdated$ = new BehaviorSubject<DocumentModel[]>(this.documents);
    ds.getDocuments().subscribe(documents => {
      this.documents = documents;
      this.documentsUpdated$.next(this.documents);
    })
  }

  getDocument(id: number): DocumentModel {
    return this.documents.find(doc => doc.id === id);
  }

  addDocument(document: DocumentModel): Observable<DocumentModel> {
    let obs: Observable<DocumentModel> = new Observable<DocumentModel>((subscriber) => {
      this.ds.addDocument(document).subscribe((doc) => {
        this.documents.push(doc);
        this.documentsUpdated$.next(this.documents);
        subscriber.next(doc);
        subscriber.complete();
      });
    });
    return obs;
  }

  updateDocument(document: DocumentModel): Observable<DocumentModel> {
    let obs: Observable<DocumentModel> = new Observable<DocumentModel>((subscriber) => {
      this.ds.saveDocument(document).subscribe((doc) => {
        subscriber.next(doc);
        subscriber.complete();
      });
    });
    return obs;
  }

  deleteDocument(id: number) {
    let index = this.documents.findIndex((doc) => {
      doc.id == id
    });
    if(index) {
      this.ds.deleteDocument(id).subscribe(() => {
        this.documents.splice(index, 1);
        this.documentsUpdated$.next(this.documents);
      })
    }
  }
}
