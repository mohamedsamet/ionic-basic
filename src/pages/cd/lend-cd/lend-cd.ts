import { Component, OnInit } from '@angular/core';
import {  NavParams,ViewController } from 'ionic-angular';
import { CDModel } from '../cdModel';
import { LibraryService } from '../../../service/library.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {
  public cd :CDModel;
  private index : number;
  constructor(public navParams: NavParams, private viewCtrl: ViewController, private LibraryService : LibraryService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.cd = this.LibraryService.cdList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss()
  }

  onLendGetCd(){
    this.cd.isLend = ! this.cd.isLend;
  }

  onSubmitForm(form: NgForm){
    this.dismissModal();
  }

  onResetDates() {
    this.cd.sendDate = '';
    this.cd.getDate ='';
  }

}