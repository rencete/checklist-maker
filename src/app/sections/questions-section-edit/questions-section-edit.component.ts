import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { DocumentModelService } from 'src/app/models/document-model.service';
import { QuestionsSectionModel, QuestionModel, QuestionBlankLength } from 'src/app/models/questions-section.model';

@Component({
  selector: 'app-questions-section-edit',
  templateUrl: './questions-section-edit.component.html',
  styleUrls: ['./questions-section-edit.component.css']
})
export class QuestionsSectionEditComponent implements OnInit {
  @Input()
  sectionId: number;

  public model: QuestionsSectionModel;

  constructor(
    public document: DocumentModelService
  ) { }

  ngOnInit() {
    let section = this.document.model.getSection(this.sectionId);
    this.model = section ? section.model as QuestionsSectionModel : undefined;
  }

  addQuestion() {
    this.model.questions.push(new QuestionModel());
  }

  reorder(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.model.questions, event.previousIndex, event.currentIndex);
  }

  trackByIndex(index: number, obj: any) {
    return index;
  }

  deleteQuestion(index: number) {
    this.model.questions.splice(index, 1);
  }

  formatLabel(value: number) {
    return QuestionBlankLength[value];
  }

  displayLengthAsText(length: number) {
    return QuestionBlankLength[length-1];
  }
}
