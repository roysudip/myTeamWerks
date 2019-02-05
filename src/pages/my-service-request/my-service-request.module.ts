import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyServiceRequestPage } from './my-service-request';

@NgModule({
  declarations: [
    MyServiceRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(MyServiceRequestPage),
  ],
})
export class MyServiceRequestPageModule {}
