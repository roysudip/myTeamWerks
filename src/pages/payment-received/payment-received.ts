import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentReceivedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-received',
  templateUrl: 'payment-received.html',
})
export class PaymentReceivedPage {
  payment_tab: string = "PaymentMade";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad PaymentReceivedPage');
  }
  notification(){
    this.navCtrl.push('NotificationPage')
  }

  dashboardPage(){
    this.navCtrl.setRoot('DashboardPage')
  }

}
