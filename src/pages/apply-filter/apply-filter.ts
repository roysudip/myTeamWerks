import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApplyFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-filter',
  templateUrl: 'apply-filter.html',
})
export class ApplyFilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyFilterPage');
  }
  notification(){
    this.navCtrl.push('NotificationPage')
  }
  

  serviceAssistanceRequestPage(){
    this.navCtrl.push('ServiceAssistanceRequestPage')
  }

}
