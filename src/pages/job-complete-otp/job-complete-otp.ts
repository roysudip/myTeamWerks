import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JobCompleteOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-complete-otp',
  templateUrl: 'job-complete-otp.html',
})
export class JobCompleteOtpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobCompleteOtpPage');
  }
  notification(){
    this.navCtrl.push('NotificationPage')
  } 

  MyServicesPage(){
    this.navCtrl.push('MyServicesPage')
  }

}
