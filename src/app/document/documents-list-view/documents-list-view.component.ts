import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DocumentsListViewDataSource } from './documents-list-view-datasource';
import { DocumentModel } from 'src/app/models/document.model';

@Component({
  selector: 'app-documents-list-view',
  templateUrl: './documents-list-view.component.html',
  styleUrls: ['./documents-list-view.component.css']
})
export class DocumentsListViewComponent implements AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DocumentModel>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title'];

  constructor(public dataSource: DocumentsListViewDataSource) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
