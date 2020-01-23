export class QuestionsSectionModel {
    public title: string;
    public questions: QuestionModel[] = [];

    constructor(title: string = "") {
        this.title = title;
    }
}

export class QuestionModel {
    public question: string;
    public blankLength: QuestionBlankLength;

    constructor(q: string = "") {
        this.question = q;
        this.blankLength = QuestionBlankLength.shrt;
    }
}

export enum QuestionBlankLength {
    shrt,
    med,
    long,
    full
}