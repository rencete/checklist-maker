import { Section } from './section.interface';
import { SectionTypes } from './section-types';
import { ChecklistModel } from './checklist.model';
import { SectionHeaderModel } from './section-header.model';

export class DocumentModel {
    public title: string = "";
    public editable: boolean = true;
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
                break;
            }
            case SectionTypes.Header: {
                model = new SectionHeaderModel();
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