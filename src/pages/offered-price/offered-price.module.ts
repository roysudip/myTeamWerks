import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferedPricePage } from './offered-price';

@NgModule({
  declarations: [
    OfferedPricePage,
  ],
  imports: [
    IonicPageModule.forChild(OfferedPricePage),
  ],
})
export class OfferedPricePageModule {}
