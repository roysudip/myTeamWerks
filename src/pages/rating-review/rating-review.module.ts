import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatingReviewPage } from './rating-review';

@NgModule({
  declarations: [
    RatingReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(RatingReviewPage),
  ],
})
export class RatingReviewPageModule {}
