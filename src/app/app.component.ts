import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ViewChild } from '@angular/core';
import { NavController,MenuController,Platform } from 'ionic-angular';
import { SettingsPage } from '../pages/settings/setting';
import * as firebase from 'firebase';
import { AuthPage } from '../pages/auth/auth';
import { LibraryService } from '../service/library.service';
import { CameraPage } from '../pages/camera/camera';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
tabsPage : any = TabsPage;
settingsPage : any = SettingsPage;
authPage : any = AuthPage;
isAuth : boolean;
cameraPage: any = CameraPage;
@ViewChild('myContent') content : NavController
  constructor(platform: Platform,
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private libraryService : LibraryService,
    private menuCtrl : MenuController) {
    platform.ready().then(() => {
      let config = {
        apiKey: "AIzaSyDTEEaZiVWYmR92wllHZt9XpQej4ODWuqI",
        authDomain: "ionic-back.firebaseapp.com",
        databaseURL: "https://ionic-back.firebaseio.com",
        projectId: "ionic-back",
        storageBucket: "ionic-back.appspot.com",
        messagingSenderId: "635148466159"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged((user )=> {
        if (user) {
          this.isAuth = true;
          this.libraryService.retrieveDataCd();          
        }else {
          this.isAuth = false;
          this.content.setRoot(AuthPage, {mode : 'connect'})
        }
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  OnNavigate(page:any, data ? : {}){
    if (page == this.tabsPage){
      this.libraryService.retrieveDataCd()
      this.content.getActive().component.name != 'TabsPage' 
      ?(this.content.setRoot(page, data? data: null))
      :null
    }else {
      this.content.setRoot(page, data? data: null)
    }
      this.menuCtrl.close();
  }

  onDisconnect(){
    firebase.auth().signOut();
    this.menuCtrl.close();
  }

}
