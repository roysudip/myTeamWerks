import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-detail',
  templateUrl: 'profile-detail.html',
})
export class ProfileDetailPage {
	

profile: string = "myservices";

isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetailPage');
  }
  notification(){
    this.navCtrl.push('NotificationPage')
  }
}
