import { Injectable } from '@angular/core';

@Injectable()
export class ChecklistModel {
    public title: string;
    public items: string[];
    public columns: number = 1;
    public points: number = 2;

    public get length(): number {
        return this.items.length;
    }

    constructor() {
        this.title = "Checklist Title"
        this.items = [""];
    }
}