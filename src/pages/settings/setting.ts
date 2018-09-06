import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';


@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
  })
  export class SettingsPage {
  
    constructor(private menuContrl: MenuController) {
    }

    onToggleMenu(){
      this.menuContrl.open();
    }
    
  }
  