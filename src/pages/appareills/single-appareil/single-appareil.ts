import { Component, OnInit } from '@angular/core';
import {  NavParams,ViewController } from 'ionic-angular';
import { AppareilModel } from '../appareilModel';
import { AppareilService } from '../../../service/appareils.service';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  public appareil :AppareilModel;
  private index : number;
  constructor(public navParams: NavParams, private viewCtrl: ViewController, private appreilService : AppareilService) {
  }

ngOnInit(){
  this.index = this.navParams.get('index');
  this.appareil = this.appreilService.appreilList[this.index];
}

dismissModal(){
  this.viewCtrl.dismiss()
}

onToggleAppreil(){
  this.appareil.isOn = ! this.appareil.isOn;
}


}
