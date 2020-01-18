import { SectionTypes } from './section-types';
import { ChecklistModel } from './checklist.model';

export interface Section {
    id: number;
    type: SectionTypes;
    model: ChecklistModel;
}