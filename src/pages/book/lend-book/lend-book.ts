import { Component } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular';
import { BookModel } from '../bookModel';
import { LibraryService } from '../../../service/library.service';
import { NgForm } from '@angular/forms/';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html'
})
export class LendBookPage {
    public book : BookModel;
    private index : number;
    constructor(public navParams: NavParams, private viewCtrl: ViewController, private LibraryService : LibraryService) { }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.book = this.LibraryService.bookList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss()
  }

  onLendGetBook(){
    this.book.isLend = ! this.book.isLend;
  }

  onSubmitForm(form: NgForm){
    this.dismissModal();
  }

  onResetDates() {
    this.book.sendDate = '';
    this.book.getDate ='';
  }
}
