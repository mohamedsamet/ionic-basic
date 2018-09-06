import {Component} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { CDModel } from './cdModel';
import { LibraryService } from '../../service/library.service';
import { LendCdPage } from './lend-cd/lend-cd';


@Component({
    selector: 'page-cd-list',
    templateUrl: 'cdList.html'
  })
  export class CdListPage {
    public cdList: CDModel[];
    constructor(private modalCtrl : ModalController, private libraryService : LibraryService, private menuContrl : MenuController) {
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
  }
  