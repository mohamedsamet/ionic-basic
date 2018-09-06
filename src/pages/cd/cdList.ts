import {Component} from '@angular/core';
import { MenuController,NavController,ModalController } from 'ionic-angular';
import { CDModel } from './cdModel';
import { LibraryService } from '../../service/library.service';
import { LendCdPage } from './lend-cd/lend-cd';
import { cdFormPage } from '../cd-form/cd-form';


@Component({
    selector: 'page-cd-list',
    templateUrl: 'cdList.html'
  })
  export class CdListPage {
    public cdList: CDModel[];
    private addNewCD = cdFormPage;
    constructor(private modalCtrl : ModalController, private navCtrl: NavController, private libraryService : LibraryService, private menuContrl : MenuController) {
    }

    ionViewWillEnter(){
      this.cdList = this.libraryService.cdList.slice();
    }

    onLoadCd(index: number){
      let modal = this.modalCtrl.create(LendCdPage,{index: index })
      modal.present();
    }  

    onToggleMenu(){
      this.menuContrl.open();
    }

    onAddNewCD(){
      this.navCtrl.push(this.addNewCD)
    }
  }
  