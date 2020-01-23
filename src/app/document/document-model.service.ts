import { Injectable } from "@angular/core";

import { DocumentModel } from '../models/document.model';
import { SectionTypes } from '../models/section-types';
import { ChecklistSectionModel } from '../models/section-models/checklist-section.model';
import { HeaderSectionModel } from '../models/section-models/header-section.model';
import { QuestionsSectionModel } from '../models/section-models/questions-section.model';
import { Section } from '../models/section.interface';

@Injectable({
    providedIn: 'root'
})
export class DocumentModelService {
    public model: DocumentModel;

    constructor() { }    

    private getNextId(): number {
        const id = this.model.nextId;
        this.model.nextId = id + 1;
        return id;
    }

    public getSection(id: number) {
        if(this.model) {
            return this.model.sections.find(s => s.id == id);
        }
        return undefined;
    }

    public addSectionOfType(type: SectionTypes) {
        var model;
        switch(type) {
            case SectionTypes.Checklist: {
                model = new ChecklistSectionModel();
                break;
            }
            case SectionTypes.Header: {
                model = new HeaderSectionModel();
                break;
            }
            case SectionTypes.Questions: {
                model = new QuestionsSectionModel();
                break;
            }
            default: {
                model = undefined;
                break;
            }
        }
        let newSection: Section = {
            id: this.getNextId(),
            type: type,
            model: model
        }
        this.model.sections.push(newSection);
    }
}