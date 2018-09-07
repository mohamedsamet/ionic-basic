import {Component , OnInit} from '@angular/core';
import { MenuController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { normalizeURL } from 'ionic-angular/util/util';

@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html'
  })
  export class CameraPage implements OnInit {
    imageurl:string;
    constructor(private menuContrl: MenuController, 
                private camera : Camera,
                private toastCtrl : ToastController) {
    }

    ngOnInit() {
    }

    onToggleMenu(){
      this.menuContrl.open();
    }   

    onTakePhoto(){
      this.camera.getPicture({
        destinationType:this.camera.DestinationType.FILE_URI,
        encodingType:this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE,
        correctOrientation: true
      }).then(data => {
        if (data){
          this.imageurl = normalizeURL(data);
        }
      }).catch(error => {
        this.toastCtrl.create({
          message: error,
          duration:3000,
          position:'bottom'
        }).present();
      })
    }

  }
  