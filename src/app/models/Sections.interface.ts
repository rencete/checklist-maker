import { SectionTypes } from './section-types';
import { ChecklistModel } from './checklist.model';

export interface Sections {
    name: String;
    type: SectionTypes;
    model: ChecklistModel;
}