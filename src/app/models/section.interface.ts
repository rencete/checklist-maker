import { SectionTypes } from './section-types';
import { ChecklistModel } from './checklist.model';
import { HeaderSectionModel } from './header-section.model';
import { QuestionsSectionModel } from './questions-section.model';

export interface Section {
    id: number;
    type: SectionTypes;
    model: ChecklistModel | HeaderSectionModel | QuestionsSectionModel;
}