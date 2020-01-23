import { Injectable } from '@angular/core';
import { DocumentModel } from './document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentRepository {
  public model: DocumentModel;

  constructor() { }
}
