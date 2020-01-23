export class ChecklistSectionModel {
    public title: string;
    public items: ChecklistItemModel[] = [];
    public columns: number = 1;
    public points: number = 2; // used either if Points Style in [perCheckbox, perSection]
    public pointsType: ChecklistPointTypes = ChecklistPointTypes.perCheckbox;
    public showTitle: boolean = true;

    public get length(): number {
        return this.items.length;
    }

    constructor(title: string = "") {
        this.title = title;
    }
}

export class ChecklistItemModel {
    public text: string;
    public points: number = 0; // used either if Points Style = perItem

    constructor(text: string = "") {
        this.text = text;
    }
}

export enum ChecklistPointTypes {
    perCheckbox,
    perItem,
    perSection
}