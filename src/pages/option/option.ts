import { Component, OnInit } from '@angular/core';
import { MenuController } from 'ionic-angular';


@Component({
    selector: 'page-options',
    templateUrl: 'option.html'
  })
  export class OptionsPage { constructor(private menuContrl: MenuController ){}

    onToggleMenu(){
      this.menuContrl.open();
    }
      
  }

