export class AppareilModel {
    description: string[];
    id : number;
    isOn: boolean;
    constructor(public name : string) {
        this.isOn = false;
    }
}