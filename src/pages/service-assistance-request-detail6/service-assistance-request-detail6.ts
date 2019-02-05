import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServiceAssistanceRequestDetail6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-assistance-request-detail6',
  templateUrl: 'service-assistance-request-detail6.html',
})
export class ServiceAssistanceRequestDetail6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceAssistanceRequestDetail6Page');
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
