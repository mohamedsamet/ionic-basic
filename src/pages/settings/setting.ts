import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';


@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
  })
  export class SettingsPage {
  
    constructor(private alertCtrl : AlertController, private menuContrl: MenuController) {
    }

    onToggleLight(){
      let alert = this.alertCtrl.create({
        title:"Etes vous sure de vouloir continuer",
        subTitle:"Cette action allumera ou éteindera toutes les lumières de la maison!",
        buttons: [{
          text: "annuler",
          role:'cancel'
        }, {
          text:'confirmer',
          handler: () => console.log('confirmer !')
        }]
      })
      alert.present();
    }

    onToggleMenu(){
      this.menuContrl.open();
    }
    
  }
  