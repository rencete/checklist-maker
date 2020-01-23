import { SectionTypes } from './section-types';
import { ChecklistSectionModel } from './section-models/checklist-section.model';
import { HeaderSectionModel } from './section-models/header-section.model';
import { QuestionsSectionModel } from './section-models/questions-section.model';

export interface Section {
    id: number;
    type: SectionTypes;
    model: ChecklistSectionModel | HeaderSectionModel | QuestionsSectionModel;
}