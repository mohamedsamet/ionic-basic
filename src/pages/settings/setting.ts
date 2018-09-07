import {Component , OnInit} from '@angular/core';
import { MenuController, ToastController, LoadingController } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
  })
  export class SettingsPage implements OnInit {
    latitude : number;
    longitude : number;
    marker : {
      latitude : number,
      longitude: number,
      draggable:true
    }
    constructor(private menuContrl: MenuController, 
                private grolocation : Geolocation,
                private loadingCtrl:LoadingController,
                private toastCtrl : ToastController) {
    }

    ngOnInit() {
      this.onLocateUser();
    }

    onToggleMenu(){
      this.menuContrl.open();
    }   

    onMapClicked(event) {
      this.marker = {latitude : event.coords.lat,
                      longitude: event.coords.lng,
                      draggable: true
                    }
    }

    onLocateUser (){
      let loader = this.loadingCtrl.create({
        content:'Recherche de votre emplacement'
      });
      loader.present();
      this.grolocation.getCurrentPosition().then(res => {
        loader.dismiss();
        this.latitude = res.coords.latitude;
        this.longitude = res.coords.longitude;
        this.marker = {
          latitude:res.coords.latitude,
          longitude:res.coords.longitude,
          draggable:true
        }
      }).catch(error=> {
        loader.dismiss();
        this.toastCtrl.create({
          message : error,
          duration : 3000,
          position:"bottom" 
        }).present();
      })
    }
  }
  