import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { ToasterServiceProvider } from './../../providers/toaster-service/toaster-service';
import { NetworkServiceProvider } from './../../providers/network-service/network-service';
import { WebServiceProvider } from './../../providers/web-service/web-service';
import { LoaderServiceProvider } from './../../providers/loader-service/loader-service';
import { GeneralServiceProvider } from './../../providers/general-service/general-service';


@IonicPage()
@Component({
  selector: 'page-request-service',
  templateUrl: 'request-service.html',
})
export class RequestServicePage {
  RequestService:any={};
  UserToken:any='';
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

  }
  notification(){
    this.navCtrl.push('NotificationPage')
  }

  AddRequestService(){
    if((localStorage.getItem("network_connection") != 'online') && (localStorage.getItem("network_connection") == 'none'))
    {
      this.ToasterService.ShowMsg({message:'No internet connection', duration:2000});
    }else{
      var i=0;

      if(this.UserToken == '' || this.UserToken == undefined || this.UserToken==null){
        let alert = {message:'User Token not found.',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }
      else if(this.RequestService.serviceAssistantType == '' || this.RequestService.serviceAssistantType == undefined){
        let alert = {message:'Please enter your service assistant',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.date == '' || this.RequestService.date == undefined){
        let alert = {message:'Please enter your service date',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.time == '' || this.RequestService.time == undefined){
        let alert = {message:'Please enter your service time',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.price == '' || this.RequestService.price == undefined){
        let alert = {message:'Please enter your service time',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.price == '' || this.RequestService.price == undefined){
        let alert = {message:'Please enter your service price',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.clientName == '' || this.RequestService.clientName == undefined){
        let alert = {message:'Please enter your client name',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.clientMobileNo == '' || this.RequestService.clientMobileNo == undefined){
        let alert = {message:'Please enter your client mobile',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(!this.GeneralService.validatePhone(this.RequestService.clientMobileNo)){
        let alert = {message:'Please enter valid mobile number',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.clientEmail == '' || this.RequestService.clientEmail == undefined){
        let alert = {message:'Please enter your client email',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(!this.GeneralService.validateEmail(this.RequestService.clientEmail)){
        let alert = {message:'Please enter valid email',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.street == '' || this.RequestService.street == undefined){
        let alert = {message:'Please enter property street address',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.city == '' || this.RequestService.city == undefined){
        let alert = {message:'Please enter property city',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.state == '' || this.RequestService.state == undefined){
        let alert = {message:'Please enter property state',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.zipCode == '' || this.RequestService.zipCode == undefined){
        let alert = {message:'Please enter property zip code',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.requestForAll == '' || this.RequestService.requestForAll == undefined){
        let alert = {message:'Please select agent office',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else if(this.RequestService.gender == '' || this.RequestService.gender == undefined){
        let alert = {message:'Please select agent gender',duration:2000};
        this.ToasterService.ShowMsg(alert);
        i++;
      }else{
        this.LoadingService.ShowLoading();
        this.WebService.AddRequestService(this.RequestService, this.UserToken).subscribe((Response)=>{
          this.LoadingService.hideLoading();

          if(Response.success == false){
            let alert={message:Response.message,duration:3000}
            this.ToasterService.ShowMsg(alert);
          }
          else if(Response.success == true){
            this.RequestService={};
            this.navCtrl.push('MyServiceRequestPage');
          }
        },(error)=>{

            let alert={message:'Server/Internet not working.',duration:3000}
            this.ToasterService.ShowMsg(alert);
        })

      }

    }
  }


}
