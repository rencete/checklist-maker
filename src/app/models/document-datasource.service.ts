import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DocumentModel } from './document.model';

const PROTOCOL = "http";
const PORT = 3500;

@Injectable({
    providedIn: 'root'
})
export class DocumentDataSource {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;
    }

    getDocuments(): Observable<DocumentModel[]> {
        return this.http.get<DocumentModel[]>(`${this.baseUrl}/documents`);
    }

    addDocument(document: DocumentModel): Observable<DocumentModel> {
        return this.http.post<DocumentModel>(`${this.baseUrl}/documents`, document);
    }

    saveDocument(document: DocumentModel): Observable<DocumentModel> {
        return this.http.put<DocumentModel>(`${this.baseUrl}/documents/${document.id}`, document);
    }
}