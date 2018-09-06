import {Component} from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { AppareilModel } from './appareilModel';
import { AppareilService } from '../../service/appareils.service';
import { MenuController } from 'ionic-angular';


@Component({
    selector: 'page-appareils',
    templateUrl: 'appareils.html'
  })
  export class AppreilsPage {
    public appreilList: AppareilModel[];
    constructor(private modalCtrl : ModalController, private appareilService : AppareilService, private menuContrl : MenuController) {
    }

    ionViewWillEnter(){
      this.appreilList = this.appareilService.appreilList.slice();
    }

    onLoadAppareil(index: number){
      let modal = this.modalCtrl.create(SingleAppareilPage,{index: index })
      modal.present();
    }  

    onToggleMenu(){
      this.menuContrl.open();
    }
  }
  