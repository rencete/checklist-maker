import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-section-confirm-dialog',
  template: `
    <p>Are you sure you want to delete this section?</p>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()" cdkFocusInitial>No</button>
        <button mat-button [mat-dialog-close]="true">Yes</button>
      </div>
  `,
  styles: []
})
export class DeleteSectionConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteSectionConfirmDialogComponent>) {}

  onNoClick() {
    this.dialogRef.close();
  }

}
