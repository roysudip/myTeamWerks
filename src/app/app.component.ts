import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ToasterServiceProvider } from './../providers/toaster-service/toaster-service';
import { NetworkServiceProvider } from './../providers/network-service/network-service';
import { WebServiceProvider } from './../providers/web-service/web-service';
import { LoaderServiceProvider } from './../providers/loader-service/loader-service';
import { GeneralServiceProvider } from './../providers/general-service/general-service';


import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  public ToasterService:ToasterServiceProvider,  public LoadingService:LoaderServiceProvider,
    public GeneralService:GeneralServiceProvider, private WebService:WebServiceProvider,
    public NetworkService:NetworkServiceProvider,
    public events:Events
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

     // localStorage.removeItem('UserFull');
      statusBar.styleDefault();
      splashScreen.hide();
      this.NetworkService.checkconnection();

    });



    this.events.subscribe("loginCheck", (data) => {
      console.log('loginCheck data = ', data);
     // this.logCheck = localStorage.getItem('token');
     localStorage.getItem('UserName');
    localStorage.getItem('UserPhoto');
    localStorage.getItem('UserGender');
    localStorage.getItem('UserId');
    localStorage.getItem('UserToken');

  });


  }





}
