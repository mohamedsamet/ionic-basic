import { CDModel } from "../pages/cd/cdModel";
import { BookModel } from "../pages/book/bookModel";

export class LibraryService {
    public cdList: CDModel[] = [{
        id:1, isLend: false, name:'XBMC Ubuntu', sendDate:'',getDate:''
    },{
        id:2, isLend: false, name:'SolusOS',sendDate:'',getDate:''
    },{
        id:3, isLend: false, name:'Puppy Arcade',sendDate:'',getDate:''
    },{
        id:4, isLend: false, name:'Amatix InstantPBX',sendDate:'',getDate:''
    },{
        id:5, isLend: false, name:'Xebian',sendDate:'',getDate:''
    },{
        id:6, isLend: false, name:'Fire rescue CD',sendDate:'',getDate:''
    },{
        id:7, isLend: false, name:'Free BSD Livre',sendDate:'',getDate:''
    },{
        id:8, isLend: false, name:'AVG Rescue CD',sendDate:'',getDate:''
    },{
        id:9, isLend: false, name:'Wifi SLAX',sendDate:'',getDate:''
    }];
    public bookList: BookModel[] = [{
        id:1, isLend: false, name:'Five more to go',sendDate:'',getDate:''
    },{
        id:2, isLend: false, name:'Cold hearted river',sendDate:'',getDate:''
    },{
        id:3, isLend: false, name:'Bring me back',sendDate:'',getDate:''
    },{
        id:4, isLend: false, name:'Amatix InstantPBX',sendDate:'',getDate:''
    },{
        id:5, isLend: false, name:'Walter Mosley',sendDate:'',getDate:''
    },{
        id:6, isLend: false, name:'Hell Bent',sendDate:'',getDate:''
    },{
        id:7, isLend: false, name:'Sun Burn',sendDate:'',getDate:''
    },{
        id:8, isLend: false, name:'Y is for yesterday',sendDate:'',getDate:''
    },{
        id:9, isLend: false, name:'The last place you look',sendDate:'',getDate:''
    }];

    addCD(cdName){
        this.cdList.push({id:this.cdList.length+1,isLend:false,name:cdName,sendDate:'',getDate:''});
    }

    addBook(bookName){
        this.bookList.push({id:this.bookList.length+1,isLend:false,name:bookName,sendDate:'',getDate:''});
    }
}