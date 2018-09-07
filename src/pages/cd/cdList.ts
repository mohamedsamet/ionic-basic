import {Component,OnInit,OnDestroy} from '@angular/core';
import { MenuController,NavController,ModalController ,ToastController,LoadingController} from 'ionic-angular';
import { CDModel } from './cdModel';
import { LibraryService } from '../../service/library.service';
import { LendCdPage } from './lend-cd/lend-cd';
import { cdFormPage } from '../cd-form/cd-form';
import { Subscription } from 'rxjs';


@Component({
    selector: 'page-cd-list',
    templateUrl: 'cdList.html'
  })
  export class CdListPage implements OnInit, OnDestroy {
    public cdList: CDModel[];
    private loader;
    private cdSubscription : Subscription;
    constructor(private modalCtrl : ModalController,
                private navCtrl: NavController,
                private libraryService : LibraryService,
                private menuContrl : MenuController,
                private tostCtrl : ToastController,
                private loadingCtrl : LoadingController) {
    }

    ngOnInit() { 
      this.fetchCd();
    }

    fetchCd(){
      this.loader  = this.loadingCtrl.create({
        content : 'Récupération en cours ...'
      });
      this.loader.present();    
      this.cdSubscription = this.libraryService.cdList$.subscribe(res => {
        this.cdList = res;
        this.loader.dismiss();
        this.tostCtrl.create({
          message : 'Donnée Récupérées',
          duration : 3000,
          position : 'bottom'
        }).present();
      })
    }

    ngOnDestroy() {
      this.cdSubscription.unsubscribe();
    }

    onLoadCd(index: number){
      let modal = this.modalCtrl.create(LendCdPage,{index: index })
      modal.present();
    }  

    onToggleMenu(){
      this.menuContrl.open();
    }

    onAddNewCD(){
      this.navCtrl.push(cdFormPage)
    }

    onSaveList() {
      let loader  = this.loadingCtrl.create({
        content : 'Sauvegarde en cours ...'
      });
      loader.present();
      this.libraryService.saveDataCd().then(()=> {
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
      this.libraryService.retrieveDataCd().then(()=> {
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
  