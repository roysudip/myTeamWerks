import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinalCompansationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-final-compansation',
  templateUrl: 'final-compansation.html',
})
export class FinalCompansationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalCompansationPage');
  }
  notification(){
    this.navCtrl.push('NotificationPage')  
  }

  serviceResponsesPage(){
    this.navCtrl.push('ServiceResponsesPage') 
  }

}
