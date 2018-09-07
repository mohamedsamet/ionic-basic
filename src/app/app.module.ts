import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/setting';
import { LibraryService } from '../service/library.service';
import { CdListPage } from '../pages/cd/cdList';
import { BookListPage } from '../pages/book/bookList';
import { LendBookPage } from '../pages/book/lend-book/lend-book';
import { LendCdPage } from '../pages/cd/lend-cd/lend-cd';
import { cdFormPage } from '../pages/cd-form/cd-form';
import { BookFormPage } from '../pages/book-form/book-form';
import { AuthService } from '../service/auth.service';
import { AuthPage } from '../pages/auth/auth';
import { AgmCoreModule} from '@agm/core';
import {Geolocation} from '@ionic-native/geolocation';
import {Camera} from '@ionic-native/camera'
import { CameraPage } from '../pages/camera/camera';


@NgModule({
  declarations: [
    MyApp,
    BookListPage,
    LendBookPage,
    LendCdPage,
    TabsPage,
    CdListPage,
    CameraPage,    
    SettingsPage,
    BookFormPage,
    cdFormPage,
    AuthPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey : 'AIzaSyDTEEaZiVWYmR92wllHZt9XpQej4ODWuqI'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookListPage,
    LendBookPage,
    cdFormPage,
    BookFormPage,
    LendCdPage,
    CameraPage,
    TabsPage,
    AuthPage,
    CdListPage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    LibraryService,
    SplashScreen,
    AuthService,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
