import { Injectable } from '@angular/core';
import { DocumentModel } from './document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentModelService {
  public model: DocumentModel;

  constructor() { }
}
