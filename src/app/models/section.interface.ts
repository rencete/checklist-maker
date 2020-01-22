import { SectionTypes } from './section-types';
import { ChecklistModel } from './checklist.model';
import { SectionHeaderModel } from './section-header.model';
import { QuestionsSectionModel } from './questions-section.model';

export interface Section {
    id: number;
    type: SectionTypes;
    model: ChecklistModel | SectionHeaderModel | QuestionsSectionModel;
}