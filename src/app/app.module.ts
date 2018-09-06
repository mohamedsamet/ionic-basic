import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppreilsPage } from '../pages/appareills/appareils';
import { SingleAppareilPage } from '../pages/appareills/single-appareil/single-appareil';
import { SettingsPage } from '../pages/settings/setting';
import { AppareilService } from '../service/appareils.service';
import { OptionsPage } from '../pages/option/option';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AppreilsPage,
    SingleAppareilPage,
    SettingsPage,
    OptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AppreilsPage,
    SingleAppareilPage  ,
    SettingsPage  ,
    OptionsPage
  ],
  providers: [
    StatusBar,
    AppareilService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
