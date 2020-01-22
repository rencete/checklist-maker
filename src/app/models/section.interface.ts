import { SectionTypes } from './section-types';
import { ChecklistModel } from './checklist.model';
import { SectionHeaderModel } from './section-header.model';

export interface Section {
    id: number;
    type: SectionTypes;
    model: ChecklistModel | SectionHeaderModel;
}