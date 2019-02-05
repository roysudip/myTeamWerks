import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceAssistanceRequestPage } from './service-assistance-request';

@NgModule({
  declarations: [
    ServiceAssistanceRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceAssistanceRequestPage),
  ],
})
export class ServiceAssistanceRequestPageModule {}
