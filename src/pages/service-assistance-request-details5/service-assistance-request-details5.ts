import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServiceAssistanceRequestDetails5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-assistance-request-details5',
  templateUrl: 'service-assistance-request-details5.html',
})
export class ServiceAssistanceRequestDetails5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceAssistanceRequestDetails5Page');
  }

  
  notification(){
    this.navCtrl.push('NotificationPage')
  }

  messagePage(){
    this.navCtrl.push('MessagePage')
  }

  myServiceRequestPage(){
    this.navCtrl.push('MyServiceRequestPage')
  }

  serviceResponsesPage(){
    this.navCtrl.push('ServiceResponsesPage') 
  }

  OfferedPricePage(){
    this.navCtrl.push('OfferedPricePage') 
  }

}
