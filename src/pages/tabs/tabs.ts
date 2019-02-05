import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'DashboardPage';
  tab2Root = 'MyAccountPage';
  tab3Root = 'HowItWorksPage';
  tab4Root = '';
  // showTab2:boolean=true;
  constructor(public navCtrl: NavController,public app:App) {

  }



  logOut(){
    localStorage.clear();
    this.app.getRootNav().setRoot('LoginPage');
  }





}

