import { Injectable } from '@angular/core';
import { LoadingController, Platform, ToastController, AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

declare var navigator: any;
declare var Connection: any;
@Injectable()
export class NetworkServiceProvider {

  constructor( public _loader: LoadingController,
    private _toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private network: Network,
    private platform: Platform) {

  }

  checkconnection() {
    this.network.onConnect().subscribe(data => {

      localStorage.setItem("network_connection",  data.type);
      //return connectionState;
    }, error => console.error(error));

    this.network.onDisconnect().subscribe(data => {

      localStorage.setItem("network_connection",  data.type);
      //return connectionState;
    }, error => console.error(error));

  }


  displayNetworkUpdate(connectionState: string){
    //return connectionState;
    let networkType = this.network.type;
    this._toastCtrl.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }

  checkNetwork() {
    this.platform.ready().then(() => {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
        let alert =this.alertCtrl.create({
            title: "Connection Status",
            subTitle: states[networkState],
            buttons: ["OK"]
        });
        console.log(alert);
    });
}

}
