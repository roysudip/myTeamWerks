import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(localStorage.getItem('UserToken') == null || localStorage.getItem('UserToken')==undefined || localStorage.getItem('UserToken')==""){
      this.navCtrl.push('LoginPage');
     }
  }

  login(){
    this.navCtrl.push('LoginPage');
  }

  reqService(){
    this.navCtrl.push('RequestServicePage');
  }

  NotificationPage(){
    this.navCtrl.push('NotificationPage');
  }

  myServiceReq(){
    this.navCtrl.push('MyServiceRequestPage');
  }
  FinalCompansationPage(){
    this.navCtrl.push('FinalCompansationPage')
  }

  JobCompleteOtpPage(){
    this.navCtrl.push('JobCompleteOtpPage')
  }
  PriceNegotiationPage(){
    this.navCtrl.push('PriceNegotiationPage')
  }

  RatingReviewPage(){
    this.navCtrl.push('RatingReviewPage')
  }

  PaymentReceivedPage(){
    this.navCtrl.push('PaymentReceivedPage')
  }

  myAppointment(){
    this.navCtrl.push('MyServicesPage')
  }
  MessagePage(){
    this.navCtrl.push('MessagePage')
  }
  ServiceAssistanceRequestPage(){
    this.navCtrl.push('ServiceAssistanceRequestPage')
  }

  notification(){
    this.navCtrl.push('NotificationPage')
  }

  contactUsPage(){
    this.navCtrl.push('ContactUsPage')
  }

  aboutUsPage(){
    this.navCtrl.push('AboutUsPage')
  }

  howItWorksPage(){
    this.navCtrl.push('HowItWorksPage')
  }

  OfferedPricePage(){
    this.navCtrl.push('OfferedPricePage')
  }





}
