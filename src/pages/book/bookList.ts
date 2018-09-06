import { Component } from '@angular/core';
import { ModalController,NavController ,MenuController} from 'ionic-angular';
import { LibraryService } from '../../service/library.service';
import { BookModel } from './bookModel';
import { LendBookPage } from './lend-book/lend-book';
import { BookFormPage } from '../book-form/book-form';

@Component({
  selector: 'page-book-list',
  templateUrl: 'bookList.html'
})
export class BookListPage {
  public bookList: BookModel[];
  
  constructor(public menuContrl: MenuController,private navCtrl: NavController, private modalCtrl : ModalController, private libraryService : LibraryService) {
  }

  ionViewWillEnter(){
    this.bookList = this.libraryService.bookList.slice();
  }

  onLoadBook(index: number){
    let modal = this.modalCtrl.create(LendBookPage,{index: index })
    modal.present();
  }  

  onToggleMenu(){
    this.menuContrl.open();
  }

  onAddNewBook(){
    this.navCtrl.push(BookFormPage)
  }

}
