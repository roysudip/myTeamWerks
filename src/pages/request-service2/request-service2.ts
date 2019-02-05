import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestService2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-service2',
  templateUrl: 'request-service2.html',
})
export class RequestService2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestService2Page');
  }

  myServiceRequestPage(){
    this.navCtrl.push('MyServiceRequestPage')
  }

}
