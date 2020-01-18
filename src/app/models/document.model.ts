import { Section } from './section.interface';
import { SectionTypes } from './section-types';
import { ChecklistModel } from './checklist.model';

export class DocumentModel {
    public title: string = "";
    public editable: boolean = false;
    public showPoints: boolean = false;
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
                model = new ChecklistModel();
            }
            default: {
                model = undefined;
            }
        }
        let newSection: Section = {
            id: this.nextId(),
            type: type,
            model: model
        }
        this.sections.push(newSection);
    }
  }