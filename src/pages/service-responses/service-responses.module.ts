import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceResponsesPage } from './service-responses';

@NgModule({
  declarations: [
    ServiceResponsesPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceResponsesPage),
  ],
})
export class ServiceResponsesPageModule {}
