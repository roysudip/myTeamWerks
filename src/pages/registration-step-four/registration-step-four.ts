import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { ToasterServiceProvider } from './../../providers/toaster-service/toaster-service';
import { NetworkServiceProvider } from './../../providers/network-service/network-service';
import { WebServiceProvider } from './../../providers/web-service/web-service';
import { LoaderServiceProvider } from './../../providers/loader-service/loader-service';
import { GeneralServiceProvider } from './../../providers/general-service/general-service';


@IonicPage()
@Component({
  selector: 'page-registration-step-four',
  templateUrl: 'registration-step-four.html',
})
export class RegistrationStepFourPage {
  User:any={};
  UserFinal:any={};
  StepThreeUser:any={};
  YearList:any=[];
  LicencedStateList:any;
  BrokerCompanyList:any;
  DisplaySearchList:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ToasterService:ToasterServiceProvider,  public LoadingService:LoaderServiceProvider,
     public GeneralService:GeneralServiceProvider, private WebService:WebServiceProvider,
     public NetworkService:NetworkServiceProvider, public platform: Platform, private actionSheet:ActionSheetController
    ) {
 }

 ionViewDidEnter() {

  /***********Check past step value*************** */
  if(this.navParams.get('userData')){
    this.StepThreeUser=this.navParams.get('userData');
  }

  if(this.GeneralService.isEmpty(this.StepThreeUser) || this.StepThreeUser==undefined){
     this.navCtrl.push('RegistrationStepThreePage', {
       ErrorMsg: 'Please fill up the Step-3 first'
     });

  }
  if(localStorage.getItem('UserStep4')!='' && localStorage.getItem('UserStep4')!=null){
    this.User=JSON.parse(localStorage.getItem('UserStep4'));
  }

 }

  ionViewDidLoad() {
    //this.User=this.navParams.get('userData');
    this.YearList=this.GeneralService.getAllYear();
    this.LicencedStateListService();
  }

  registrationPage5(){

    if((localStorage.getItem("network_connection") != 'online') && (localStorage.getItem("network_connection") == 'none'))
    {
      this.ToasterService.ShowMsg({message:'No internet connection', duration:2000});
    }else{
        var i=0;
        if(this.User.BrokerageName == '' || this.User.BrokerageName == undefined){
          let alert = {message:'Please enter brokerage name ',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.BrokerageAddress == '' || this.User.BrokerageAddress == undefined){
          let alert = {message:'Please enter brokerage address ',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.BrokerageMainPhone == '' || this.User.BrokerageMainPhone == undefined){
          let alert = {message:'Please enter brokerage phone ',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(!this.GeneralService.validatePhone(this.User.BrokerageMainPhone)){
          let alert = {message:'Please enter valid brokerage phone ',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.BrokerageLicensedState == '' || this.User.BrokerageLicensedState == undefined){
          let alert = {message:'Please enter licensed in state ',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.BrokerageLicensedStateNumber == '' || this.User.BrokerageLicensedStateNumber == undefined){
            let alert = {message:'Please enter state license number ',duration:2000};
            this.ToasterService.ShowMsg(alert);
            i++;
        }else if(this.User.BrokerageLicenseExpire == '' || this.User.BrokerageLicenseExpire == undefined){
          let alert = {message:'Please enter license expire ',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
      }else{

        localStorage.removeItem('UserStep4');
        localStorage.setItem('UserStep4', JSON.stringify(this.User));

          if(Object.keys(this.StepThreeUser).length!=0 && this.StepThreeUser!=undefined){
            this.UserFinal=Object.assign(this.User, this.StepThreeUser);

            this.navCtrl.push('RegistrationStepFivePage', {
              userData: this.UserFinal
            });
          }else{
            this.navCtrl.push('RegistrationStepThreePage', {
              ErrorMsg: 'Please fill up the Step-3 first'
            });

          }

        }
    }

  }

  /****************Get Licensese list************************** */
 LicencedStateListService(){
  this.NetworkService.checkconnection();
  if((localStorage.getItem("network_connection") == 'online') || (localStorage.getItem("network_connection") != 'none')){
   this.LoadingService.ShowLoading();
    this.WebService.getLicencedStateList().subscribe((Response)=>{
      this.LoadingService.hideLoading();
      if(Response.success == false){
        let alert={message:Response.message,duration:3000}
        this.ToasterService.ShowMsg(alert);
      }
      else if(Response.success == true){
        this.LicencedStateList=Response.data;

        console.log(this.LicencedStateList);
      }
    },(error)=>{
        let alert={message:'Server/Internet not working.',duration:3000}
        this.ToasterService.ShowMsg(alert);
    })
  }else{
    this.LoadingService.hideLoading();
    let alert={message:'No internet connection available.',duration:3000}
    this.ToasterService.ShowMsg(alert);
  }
}

/************************* */
onChangeTime(SearchValue){
  this.User.brokerageId="";
  //this.User.brokerageId=Brokarage._id;
 this.User.BrokerageName= SearchValue;
 this.User.BrokerageAddress="";
 this.User.BrokerageMainPhone="";

 this.User.BrokerageLicensedStateNumber="";
 this.User.BrokerageLicenseExpire="";

 this.User.BrokerageLicensedState="";
}
  /***********Company Search************************* */
  SearchCompany(event){
    let BrokerNameSearckKey='';
    BrokerNameSearckKey=event.target.value;
    if(BrokerNameSearckKey!=''){
      this.DisplaySearchList=true;
      this.NetworkService.checkconnection();
  if((localStorage.getItem("network_connection") == 'online') || (localStorage.getItem("network_connection") != 'none')){
   //this.LoadingService.ShowLoading();
   this.WebService.getBrokerCompany(BrokerNameSearckKey).subscribe((Response)=>{
    //this.LoadingService.hideLoading();
    if(Response.success == false){
      let alert={message:Response.message,duration:3000}
      this.ToasterService.ShowMsg(alert);
    }
    else if(Response.success == true){
      this.BrokerCompanyList=Response.data;
      console.log( this.BrokerCompanyList);
    }
  },(error)=>{
      let alert={message:'Server/Internet not working.',duration:3000}
      this.ToasterService.ShowMsg(alert);
  })

  }else{
    //this.LoadingService.hideLoading();
    let alert={message:'No internet connection available.',duration:3000}
    this.ToasterService.ShowMsg(alert);
  }

    }

  }

/******************Select Brokarage item************************* */
BrokarageSelect(Brokarage:any={}){
  this.DisplaySearchList=false;
 if(Object.keys(Brokarage).length!=0 && Brokarage!=undefined ){
   this.User.brokerageId=Brokarage._id;
   //this.User.brokerageId=Brokarage._id;
  this.User.BrokerageName= Brokarage.BrokerageName;
  this.User.BrokerageAddress=Brokarage.BrokerageAddress;
  this.User.BrokerageMainPhone=Brokarage.BrokerageMainPhone;

  this.User.BrokerageLicensedStateNumber=Brokarage.BrokerageLicensedStateNumber;
  this.User.BrokerageLicenseExpire=Brokarage.BrokerageLicenseExpire;

  this.User.BrokerageLicensedState=Brokarage.BrokerageLicensedState._id;

 }
}

}
