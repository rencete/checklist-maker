export class ChecklistModel {
    public items: string[];

    public get length(): number {
        return this.items.length;
    }

    constructor(public name: string, private _length: number = 1, public columns: number = 1) {
        this.items = [];
        for(let index = 0; index < this._length; index++) {
            this.items.push("");
        }
    }
}