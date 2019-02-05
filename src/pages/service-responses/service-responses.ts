import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServiceResponsesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-responses',
  templateUrl: 'service-responses.html',
})
export class ServiceResponsesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceResponsesPage');
  }

  ServiceAssistanceRequestDetailsPage(){
    this.navCtrl.push('ServiceAssistanceRequestDetailsPage'); 
  }

  FinalCompansationPage(){
    this.navCtrl.push('FinalCompansationPage'); 
  }
  notification(){
    this.navCtrl.push('NotificationPage')
  } 

  profileDetailPage(){
    this.navCtrl.push('ProfileDetailPage')
  }

  myServiceRequestPage(){
    this.navCtrl.push('MyServiceRequestPage')
  }

  messagePage(){
    this.navCtrl.push('MessagePage')
  }
  finalCompansation2Page(){
    this.navCtrl.push('FinalCompansation2Page')
  }

  serviceAssistanceRequestDetails2Page(){
    this.navCtrl.push('ServiceAssistanceRequestDetails2Page')
  }

}
