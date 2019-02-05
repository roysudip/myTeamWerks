import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PriceNegotiationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-price-negotiation',
  templateUrl: 'price-negotiation.html',
})
export class PriceNegotiationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PriceNegotiationPage');
  }
  notification(){
    this.navCtrl.push('NotificationPage')
  }

}
