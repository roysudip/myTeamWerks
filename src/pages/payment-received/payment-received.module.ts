import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentReceivedPage } from './payment-received';

@NgModule({
  declarations: [
    PaymentReceivedPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentReceivedPage),
  ],
})
export class PaymentReceivedPageModule {}
