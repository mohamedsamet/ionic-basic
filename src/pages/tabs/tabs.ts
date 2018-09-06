import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AppreilsPage } from '../appareills/appareils';
import { SettingsPage } from '../settings/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AppreilsPage;
  tab2Root = SettingsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
