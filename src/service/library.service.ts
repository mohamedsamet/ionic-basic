import { CDModel } from "../pages/cd/cdModel";
import { BookModel } from "../pages/book/bookModel";

export class LibraryService {
    public cdList: CDModel[] = [{
        id:1, isLend: false, name:'XBMC Ubuntu'
    },{
        id:2, isLend: false, name:'SolusOS'
    },{
        id:3, isLend: false, name:'Puppy Arcade'
    },{
        id:4, isLend: false, name:'Amatix InstantPBX'
    },{
        id:5, isLend: false, name:'Xebian'
    },{
        id:6, isLend: false, name:'Fire rescue CD'
    },{
        id:7, isLend: false, name:'Free BSD Livre'
    },{
        id:8, isLend: false, name:'AVG Rescue CD'
    },{
        id:9, isLend: false, name:'Wifi SLAX'
    }];
    public bookList: BookModel[] = [{
        id:1, isLend: false, name:'Five more to go'
    },{
        id:2, isLend: false, name:'Cold hearted river'
    },{
        id:3, isLend: false, name:'Bring me back'
    },{
        id:4, isLend: false, name:'Amatix InstantPBX'
    },{
        id:5, isLend: false, name:'Walter Mosley'
    },{
        id:6, isLend: false, name:'Hell Bent'
    },{
        id:7, isLend: false, name:'Sun Burn'
    },{
        id:8, isLend: false, name:'Y is for yesterday'
    },{
        id:9, isLend: false, name:'The last place you look'
    }];
}