import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { ToasterServiceProvider } from './../../providers/toaster-service/toaster-service';
import { NetworkServiceProvider } from './../../providers/network-service/network-service';
import { WebServiceProvider } from './../../providers/web-service/web-service';
import { LoaderServiceProvider } from './../../providers/loader-service/loader-service';
import { GeneralServiceProvider } from './../../providers/general-service/general-service';


@IonicPage()
@Component({
  selector: 'page-registration-step-three',
  templateUrl: 'registration-step-three.html',
})
export class RegistrationStepThreePage {
  User:any={};
  UserFinal:any={};
  StepTwoUser:any={};
  YearList:any=[];
  LicencedStateList:any;
  DesignationsList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ToasterService:ToasterServiceProvider,  public LoadingService:LoaderServiceProvider,
     public GeneralService:GeneralServiceProvider, private WebService:WebServiceProvider,
     public NetworkService:NetworkServiceProvider, public platform: Platform, private actionSheet:ActionSheetController
    ) {
 }

 ionViewDidEnter() {

  /***********Check past step value*************** */
  if(this.navParams.get('userData')){
    this.StepTwoUser=this.navParams.get('userData');
  }

  if(this.GeneralService.isEmpty(this.StepTwoUser) || this.StepTwoUser==undefined){
     this.navCtrl.push('RegistrationStepTwoPage', {
       ErrorMsg: 'Please fill up the Step-2 first'
     });

  }
  if(localStorage.getItem('UserStep3')!='' && localStorage.getItem('UserStep3')!=null){
    this.User=JSON.parse(localStorage.getItem('UserStep3'));
  }
 }

  ionViewDidLoad() {
    //this.User=this.navParams.get('userData');
    this.YearList=this.GeneralService.getAllYear();
    this.LicencedStateListService();
    this.DesignationsListService();
  }

  registrationPage4(){

    if((localStorage.getItem("network_connection") != 'online') && (localStorage.getItem("network_connection") == 'none'))
    {
      this.ToasterService.ShowMsg({message:'No internet connection', duration:2000});
    }else{
        var i=0;
        if(this.User.UserMls == '' || this.User.UserMls == undefined){
          let alert = {message:'Please enter your M.L.S. number',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(!this.GeneralService.isNumber(this.User.UserMls)){
          let alert = {message:'M.L.S. number should be number only.',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserNrds == '' || this.User.UserNrds == undefined){
          let alert = {message:'Please select your N.R.D.S number',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(!this.GeneralService.isNumber(this.User.UserNrds)){
          let alert = {message:'N.R.D.S. number should be number only.',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserYrMnthLcnsd == '' || this.User.UserYrMnthLcnsd == undefined){
          let alert = {message:'Please enter years and months licensed',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserDsgtnCrtftn == '' || this.User.UserDsgtnCrtftn == undefined){
          let alert = {message:'Please enter designations & certifications',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserLcnsdSt == '' || this.User.UserLcnsdSt == undefined){
          let alert = {message:'Please enter licensed in state',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserLcnsdStNmbr == '' || this.User.UserLcnsdStNmbr == undefined){
          let alert = {message:'Please enter your state license number',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserLcnsExpire == '' || this.User.UserLcnsExpire == undefined){
          let alert = {message:'Please enter your license expires',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else{

          localStorage.removeItem('UserStep3');
            localStorage.setItem('UserStep3', JSON.stringify(this.User));

          if(Object.keys(this.StepTwoUser).length!=0 && this.StepTwoUser!=undefined){
            this.UserFinal=Object.assign(this.User, this.StepTwoUser);

            this.navCtrl.push('RegistrationStepFourPage', {
              userData: this.UserFinal
            });
          }else{
            this.navCtrl.push('RegistrationStepTwoPage', {
              ErrorMsg: 'Please fill up the Step-2 first'
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

/****************Get Licensese list************************** */
DesignationsListService(){
  this.NetworkService.checkconnection();
  if((localStorage.getItem("network_connection") == 'online') || (localStorage.getItem("network_connection") != 'none')){
   this.LoadingService.ShowLoading();
    this.WebService.getDesignationsList().subscribe((Response)=>{
      this.LoadingService.hideLoading();
      if(Response.success == false){
        let alert={message:Response.message,duration:3000}
        this.ToasterService.ShowMsg(alert);
      }
      else if(Response.success == true){
        this.DesignationsList=Response.data;
        console.log(this.DesignationsList);
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


}
