import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HowItWorksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-how-it-works',
  templateUrl: 'how-it-works.html',
})
export class HowItWorksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowItWorksPage');
  }

  diseases = [
    { title: "Question 1", id:'tab1' },
    { title: "Question 2",  id:'tab2'},
    { title: "Question 3",  id:'tab3'}
  ];
  shownGroup = null;
     toggleGroup(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
    };
    isGroupShown(group) {
        return this.shownGroup === group;
    };

}
