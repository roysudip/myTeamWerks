import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServiceAssistanceRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-assistance-request',
  templateUrl: 'service-assistance-request.html',
})
export class ServiceAssistanceRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceAssistanceRequestPage');
  }

  applyFilter(){

   this.navCtrl.push("ApplyFilterPage");
   
  }
  notification(){
    this.navCtrl.push('NotificationPage')
  }

  serviceAssistanceRequestDetailsPage(){
    this.navCtrl.push('ServiceAssistanceRequestDetailsPage')
  }
  serviceAssistanceRequestDetails2Page(){
    this.navCtrl.push('ServiceAssistanceRequestDetails2Page')
  }

  serviceAssistanceRequestDetails5Page(){
    this.navCtrl.push('ServiceAssistanceRequestDetails5Page')
  }

  serviceAssistanceRequestDetail6Page(){
    this.navCtrl.push('ServiceAssistanceRequestDetail6Page')
  }


  OfferedPricePage(){
    this.navCtrl.push('OfferedPricePage') 
  }

}
