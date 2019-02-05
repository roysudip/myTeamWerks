import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RatingReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rating-review',
  templateUrl: 'rating-review.html',
})
export class RatingReviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingReviewPage');
  }
  notification(){
    this.navCtrl.push('NotificationPage')
  }

  myServiceRequestPage(){
    this.navCtrl.push('MyServiceRequestPage')
  }
}
