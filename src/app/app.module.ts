import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { FileOpener } from '@ionic-native/file-opener';
import { FileChooser } from '@ionic-native/file-chooser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UploadPage } from '../pages/upload/upload';
import { UserProvider } from '../providers/user.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UploadPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileOpener,
    FileChooser
  ]
})
export class AppModule {}
