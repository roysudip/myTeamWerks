import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileDetail3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-detail3',
  templateUrl: 'profile-detail3.html',
})
export class ProfileDetail3Page {
  profile: string = "myservices";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetail3Page');
  }


  messagePage(){
    this.navCtrl.push('MessagePage')
  }

}
