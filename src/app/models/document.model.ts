import { Section } from './section.interface';
import { SectionTypes } from './section-types';
import { ChecklistSectionModel } from './section-models/checklist-section.model';
import { HeaderSectionModel } from './section-models/header-section.model';
import { QuestionsSectionModel } from './section-models/questions-section.model';

export class DocumentModel {
    public title: string = "";
    public editable: boolean = true;
    public showPoints: boolean = true;
    public sections: Section[] = [];
  
    private _nextId: number = 0;

    private nextId(): number {
        const id = this._nextId;
        this._nextId++;
        return id;
    }
  
    constructor(title: string) { 
        this.title = title;
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
            id: this.nextId(),
            type: type,
            model: model
        }
        this.sections.push(newSection);
    }

    public getSection(id: number) {
        return this.sections.find(s => s.id == id);
    }
  }