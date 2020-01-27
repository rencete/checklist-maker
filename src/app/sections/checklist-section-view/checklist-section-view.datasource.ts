import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { ChecklistItemModel } from "../../models/section-models/checklist-section.model";

/**
 * Data source for the DocumentsListView view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
@Injectable()
export class ChecklistSectionViewDataSource extends DataSource<ChecklistItemModel> {  
  data: ChecklistItemModel[] = [];
  updatedData$: BehaviorSubject<ChecklistItemModel[]>;

  constructor() {
    super();

    this.updatedData$ = new BehaviorSubject<ChecklistItemModel[]>(this.data);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ChecklistItemModel[]> {
    return this.updatedData$.asObservable();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
    this.updatedData$.complete();
  }

  setData(data: ChecklistItemModel[]) {
    this.data = data;
    this.updatedData$.next(this.data);
  }
}
