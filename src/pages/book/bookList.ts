import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController,NavController ,MenuController,ToastController,LoadingController} from 'ionic-angular';
import { LibraryService } from '../../service/library.service';
import { BookModel } from './bookModel';
import { LendBookPage } from './lend-book/lend-book';
import { BookFormPage } from '../book-form/book-form';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-book-list',
  templateUrl: 'bookList.html'
})
export class BookListPage implements OnDestroy, OnInit {
  public bookList: BookModel[];
  private bookSubscription : Subscription;
  constructor(public menuContrl: MenuController,
              private navCtrl: NavController,
              private modalCtrl : ModalController,
              private libraryService : LibraryService,
              private tostCtrl : ToastController,
              private loadingCtrl : LoadingController) {
  }

  ngOnInit(){
    let loader  = this.loadingCtrl.create({
      content : 'Récupération en cours ...'
    });
    loader.present();
    this.bookSubscription = this.libraryService.bookList$.subscribe(res => {
      this.bookList = res;
      loader.dismiss();
      this.tostCtrl.create({
        message : 'Donnée Récupérées',
        duration : 3000,
        position : 'bottom'
      }).present();
    })
    this.libraryService.retrieveDataBook();
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
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

  onSaveList() {
    let loader  = this.loadingCtrl.create({
      content : 'Sauvegarde en cours ...'
    });
    loader.present();
    this.libraryService.saveDataBook().then(()=> {
      loader.dismiss();
      this.tostCtrl.create({
        message : 'Donnée sauvegardées',
        duration : 3000,
        position : 'bottom'
      }).present();
    }).catch(error => {
      loader.dismiss();
      this.tostCtrl.create({
        message : error,
        duration : 3000,
        position : 'bottom'
      })
    })
  }

  onFetchList() {
    let loader  =this.loadingCtrl.create({
      content : 'Récupération en cours ...'
    });
    loader.present();
    this.libraryService.retrieveDataBook().then(()=> {
      loader.dismiss();
      this.tostCtrl.create({
        message : 'Donnée récupérée',
        duration : 3000,
        position : 'bottom'
      }).present();
    }).catch(error => {
      loader.dismiss();
      this.tostCtrl.create({
        message : error,
        duration : 3000,
        position : 'bottom'
      })
    })
  }

}
