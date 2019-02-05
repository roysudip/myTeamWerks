import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceAssistanceRequestDetailsPage } from './service-assistance-request-details';

@NgModule({
  declarations: [
    ServiceAssistanceRequestDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceAssistanceRequestDetailsPage),
  ],
})
export class ServiceAssistanceRequestDetailsPageModule {}
