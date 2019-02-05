import { Injectable } from '@angular/core';
import { LoadingController,LoadingOptions} from 'ionic-angular';

@Injectable()
export class LoaderServiceProvider {
  loading: any;
  loadingOptions: LoadingOptions;
constructor(private loadingCtrl:LoadingController) {
  console.log('Hello LoaderServiceProvider Provider');

}
ShowLoading() {
  this.loadingOptions = {}

  this.loading = this.loadingCtrl.create(this.loadingOptions);

  this.loading.present();

  setTimeout(() => {
      this.loading.dismissAll();
  }, 5000);

}

hideLoading() {
  this.loading.dismissAll();

}
}
