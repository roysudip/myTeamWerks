import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordAssistancePage } from './password-assistance';

@NgModule({
  declarations: [
    PasswordAssistancePage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordAssistancePage),
  ],
})
export class PasswordAssistancePageModule {}
