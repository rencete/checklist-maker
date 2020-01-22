import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChecklistModel, ChecklistItemModel, ChecklistPointTypes } from 'src/app/models/checklist.model';
import { DocumentModelService } from 'src/app/models/document-model.service';

@Component({
  selector: 'app-checklist-settings',
  templateUrl: './checklist-settings.component.html',
  styleUrls: ['./checklist-settings.component.css']
})
export class ChecklistSettingsComponent implements OnInit {
  @Input()
  sectionId: number;

  public model: ChecklistModel;

  constructor(
    public document: DocumentModelService
  ) { }

  ngOnInit() {
    let section = this.document.model.getSection(this.sectionId);
    this.model = section ? section.model as ChecklistModel : undefined;
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
