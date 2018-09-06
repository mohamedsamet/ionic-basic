import { Component } from '@angular/core';
import { AppreilsPage } from '../appareills/appareils';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  appreilPage = AppreilsPage;
  constructor() {
  }


}
