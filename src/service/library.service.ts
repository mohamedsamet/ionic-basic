import { CDModel } from "../pages/cd/cdModel";
import { BookModel } from "../pages/book/bookModel";
import { Subject } from "rxjs/Subject";
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class LibraryService {
 
    cdList$ = new Subject<CDModel[]>();
    bookList$ = new Subject<BookModel[]>();
    
    public cdList: CDModel[] = [];
    public bookList: BookModel[] = [];

    emitCds() {
        this.cdList$.next(this.cdList.slice());
    }

    emitBooks() {
       this.bookList$.next(this.bookList.slice());
    }

    addCD(cdName){
        this.cdList.push({id:this.cdList.length+1,isLend:false,name:cdName,sendDate:'',getDate:''});
        this.emitCds();
    }

    addBook(bookName){
        this.bookList.push({id:this.bookList.length+1,isLend:false,name:bookName,sendDate:'',getDate:''});
        this.emitBooks();
    }

    saveDataCd(){
        return new Promise( (resolve,rej) => {
            firebase.database().ref('cd').set(this.cdList).then(
                (data: DataSnapshot)=> resolve(data) ).catch((error) => {
                    rej(error);
                })
        })
    }

    saveDataBook(){
        return new Promise( (resolve,rej) => {
            firebase.database().ref('book').set(this.bookList).then(
                (data: DataSnapshot)=> resolve(data) ).catch((error) => {
                    rej(error);
                })
        })
    }

    retrieveDataCd(){
        return new Promise((resolve, reject) => {
            firebase.database().ref('cd').once('value').then((data:DataSnapshot)=> {
                this.cdList = data.val();
                this.emitCds();
                resolve("Donnée récupéré avec succès");
            }).catch(error => {
                reject(error);
            })
        })
    }

    retrieveDataBook(){
        return new Promise((resolve, reject) => {
            firebase.database().ref('book').once('value').then((data:DataSnapshot)=> {
                this.bookList = data.val();
                this.emitBooks();
                resolve("Donnée récupéré avec succès");
            }).catch(error => {
                reject(error);
            })
        })
    }


}