import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChecklistSectionModel, ChecklistItemModel, ChecklistPointTypes } from 'src/app/models/section-models/checklist-section.model';
import { DocumentModelService } from 'src/app/document/document-model.service';

@Component({
  selector: 'app-checklist-section-edit',
  templateUrl: './checklist-section-edit.component.html',
  styleUrls: ['./checklist-section-edit.component.css']
})
export class ChecklistSectionEditComponent implements OnInit {
  @Input()
  sectionId: number;

  public model: ChecklistSectionModel;

  constructor(
    public document: DocumentModelService
  ) { }

  ngOnInit() {
    let section = this.document.getSection(this.sectionId);
    this.model = section ? section.model as ChecklistSectionModel : undefined;
  }

  addItem() {
    this.model.items.push(new ChecklistItemModel());
  }

  reorder(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.model.items, event.previousIndex, event.currentIndex);
  }

  trackByIndex(index: number, obj: any) {
    return index;
  }

  deleteItem(index: number) {
    this.model.items.splice(index, 1);
  }

  showPointsInSettings(): boolean {
    return this.model.pointsType == ChecklistPointTypes.perCheckbox || 
      this.model.pointsType == ChecklistPointTypes.perSection;
  }
}
