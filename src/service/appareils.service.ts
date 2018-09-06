import { AppareilModel } from "../pages/appareills/appareilModel";

export class AppareilService {
    public appreilList: AppareilModel[] = [{id:1, isOn: false, name:'Machine à laver' , description:['volume : 6 litres','Puissance : 25KW', 'Encombrement : 1m']},
    {id:2,name:'Télévision', isOn: true,description:['qualité : UHD','Puissance : 2KW', 'Encombrement : 1m']},
    {id:3,name:'Ordinateur',isOn : false ,description:['Configuration : Intel i7','Puissance : 0.8KW', 'Encombrement : 0.2m']}]
    
}