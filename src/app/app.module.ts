import { Component } from '@angular/core'
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoaderServiceProvider } from '../providers/loader-service/loader-service';
import { ToasterServiceProvider } from '../providers/toaster-service/toaster-service';
import { WebServiceProvider } from '../providers/web-service/web-service';
import { NetworkServiceProvider } from '../providers/network-service/network-service';
import { GeneralServiceProvider } from '../providers/general-service/general-service';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      enableTracing: true
       }),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaderServiceProvider,
    ToasterServiceProvider,
    WebServiceProvider,
    NetworkServiceProvider,
    GeneralServiceProvider,
    Camera,
    FileTransfer,
    File,
    FileTransferObject,
    ActionSheet,

  ]
})
export class AppModule {}
