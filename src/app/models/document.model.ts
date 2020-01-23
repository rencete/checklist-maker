import { Section } from './section.interface';

export class DocumentModel {
    public id: number;
    public title: string = "";
    public showPoints: boolean = true;
    public sections: Section[] = [];

    public nextId: number = 0;

    constructor(title: string = "") {
        this.title = title;
    }
}