import { Injectable } from '@angular/core';
import {ToastController} from 'ionic-angular';

declare var google;
@Injectable()
export class ToasterServiceProvider{

  constructor(public toaster: ToastController) {
  }

  ShowMsg(Msg){
    let toast = this.toaster.create({
      message: Msg.message,
      duration: Msg.duration,
      position: Msg.position,
      cssClass: 'MsgToastClass'
    });
    toast.present();
  }


}
