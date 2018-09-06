export class BookModel {
    id : number;
    isLend: boolean;
    constructor(public name : string) {
        this.isLend = false;
    }
}