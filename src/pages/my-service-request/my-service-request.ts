import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { ToasterServiceProvider } from './../../providers/toaster-service/toaster-service';
import { NetworkServiceProvider } from './../../providers/network-service/network-service';
import { WebServiceProvider } from './../../providers/web-service/web-service';
import { LoaderServiceProvider } from './../../providers/loader-service/loader-service';
import { GeneralServiceProvider } from './../../providers/general-service/general-service';



@IonicPage()
@Component({
  selector: 'page-my-service-request',
  templateUrl: 'my-service-request.html',
})
export class MyServiceRequestPage {
  UserToken:any='';
  MyRequestService:Array<any>=[];
  start:number = 0;
  limit:number = 3;
  tot_MyServiceList:number;
  tot_loaded:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ToasterService:ToasterServiceProvider,  public LoadingService:LoaderServiceProvider,
     public GeneralService:GeneralServiceProvider, private WebService:WebServiceProvider,
     public NetworkService:NetworkServiceProvider, public platform: Platform, private actionSheet:ActionSheetController
     ) {
  }

  ionViewDidLoad() {
    if(localStorage.getItem('UserToken') == null || localStorage.getItem('UserToken')==undefined || localStorage.getItem('UserToken')==""){
      this.navCtrl.push('LoginPage');
     }
    this.UserToken=localStorage.getItem('UserToken');

    this.MyServiceRequestList();
  }
  ServiceAssistanceRequestDetailsPage(ServiceId){
    this.navCtrl.push('ServiceAssistanceRequestDetailsPage', {ServiceID:ServiceId})
  }

  requestServicePage2(){
    this.navCtrl.push('RequestService2Page');
  }
/*
  RatingReviewPage(){
    this.navCtrl.push('RatingReviewPage');
  }

  ServiceResponsesPage(){
    this.navCtrl.push('ServiceResponsesPage');
  }
  notification(){
    this.navCtrl.push('NotificationPage')
  }*/

  dashboardPage(){
    this.navCtrl.setRoot('DashboardPage')
  }
/*
  messagePage(){
    this.navCtrl.push('MessagePage')
  }

  serviceAssistanceRequestDetails2Page(){
    this.navCtrl.push('ServiceAssistanceRequestDetails2Page')
  }

  serviceAssistanceRequestDetails3Page(){
    this.navCtrl.push('ServiceAssistanceRequestDetails3Page')
  }

  serviceAssistanceRequestDetails4Page(){
    this.navCtrl.push('ServiceAssistanceRequestDetails4Page')
  }


  serviceResponses2Page(){
    this.navCtrl.push('ServiceResponses2Page')
  }

  profileDetail2Page(){
    this.navCtrl.push('ProfileDetail2Page')
  }
  profileDetail3Page(){
    this.navCtrl.push('ProfileDetail3Page')
  }

  /****************MY Service Request List*******************/

MyServiceRequestList(){
  return new Promise(resolve => {
    if((localStorage.getItem("network_connection") != 'online') && (localStorage.getItem("network_connection") == 'none'))
    {
      this.ToasterService.ShowMsg({message:'No internet connection', duration:2000});
    }else{
      if(this.UserToken == '' || this.UserToken == undefined || this.UserToken==null){
        let alert = {message:'User Token not found.',duration:2000};
        this.ToasterService.ShowMsg(alert);
      }else{
    this.LoadingService.ShowLoading();
    this.WebService.getMyRequestService(this.start, this.limit, this.UserToken).subscribe(Response => {
      this.LoadingService.hideLoading();
       if(Response.success == true){

        this.MyRequestService=Response.data;
        console.log(this.MyRequestService);
        }else{

          let alert={message:Response.message,duration:2000}
          this.ToasterService.ShowMsg(alert);
        }
   },(error)=>{

    this.LoadingService.hideLoading();
        let alert={message:'Server/Internet not working.',duration:2000}
        this.ToasterService.ShowMsg(alert);
    });
  }
}

  });
}
  /*****************Page Refresh*********************** */
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
/*************Item Scrolling****************************** */
  doInfinite(infiniteScroll) {
    this.start++;
    if (this.tot_loaded >= this.tot_MyServiceList) {
      infiniteScroll.enable(false);
      console.log('No recodrs found');
    }else{
      this.MyServiceRequestList().then((data)=>{
        infiniteScroll.complete();
      });
    }
  }
}
