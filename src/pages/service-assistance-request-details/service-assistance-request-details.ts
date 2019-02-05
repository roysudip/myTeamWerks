import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  segment:'page-service-assistance-request-details/ServiceID/:ServiceID'
})
@Component({
  selector: 'page-service-assistance-request-details',
  templateUrl: 'service-assistance-request-details.html',
})
export class ServiceAssistanceRequestDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceAssistanceRequestDetailsPage');
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

}
