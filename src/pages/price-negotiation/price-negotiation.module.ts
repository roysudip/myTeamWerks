import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PriceNegotiationPage } from './price-negotiation';

@NgModule({
  declarations: [
    PriceNegotiationPage,
  ],
  imports: [
    IonicPageModule.forChild(PriceNegotiationPage),
  ],
})
export class PriceNegotiationPageModule {}
