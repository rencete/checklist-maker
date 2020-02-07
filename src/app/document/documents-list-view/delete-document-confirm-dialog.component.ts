import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-section-confirm-dialog',
  template: `
    <h4>Confirm Delete Action</h4>
    <p>Are you sure you want to delete document with title:</p>
    <p><em>{{data.title}}?</em></p>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()" cdkFocusInitial>No</button>
        <button mat-button [mat-dialog-close]="true">Yes</button>
      </div>
  `,
  styles: []
})
export class DeleteDocumentConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDocumentConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteDocumentDialogData
  ) { }

  onNoClick() {
    this.dialogRef.close();
  }
}

export interface DeleteDocumentDialogData {
  title: string;
}
