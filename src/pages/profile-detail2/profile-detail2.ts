import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileDetail2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-detail2',
  templateUrl: 'profile-detail2.html',
})
export class ProfileDetail2Page {
  profile: string = "myservices";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetail2Page');
  }


  messagePage(){
    this.navCtrl.push('MessagePage')
  }

}
