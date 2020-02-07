import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material';

import { DocumentsListViewDataSource } from './documents-list-view-datasource';
import { DocumentModel } from '../../models/document.model';
import { DeleteDocumentConfirmDialogComponent } from './delete-document-confirm-dialog.component';
import { DocumentRepository } from 'src/app/models/document-repository.service';

@Component({
  selector: 'app-documents-list-view',
  templateUrl: './documents-list-view.component.html',
  styleUrls: ['./documents-list-view.component.css']
})
export class DocumentsListViewComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<DocumentModel>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'buttons'];

  constructor(
    public dataSource: DocumentsListViewDataSource,
    private dialog: MatDialog,
    private repository: DocumentRepository
  ) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteDocument(id: number, title: string) {
    const dialogRef = this.dialog.open(DeleteDocumentConfirmDialogComponent, {
      width: '280px',
      data: { title: title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.repository.deleteDocument(id);
      }
    });
  }

  trackByDocumentId(index: number, item: DocumentModel) {
    return item.id;
  }
}
