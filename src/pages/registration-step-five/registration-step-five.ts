import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { ToasterServiceProvider } from './../../providers/toaster-service/toaster-service';
import { NetworkServiceProvider } from './../../providers/network-service/network-service';
import { WebServiceProvider } from './../../providers/web-service/web-service';
import { LoaderServiceProvider } from './../../providers/loader-service/loader-service';
import { GeneralServiceProvider } from './../../providers/general-service/general-service';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


@IonicPage()
@Component({
  selector: 'page-registration-step-five',
  templateUrl: 'registration-step-five.html',
})
export class RegistrationStepFivePage {
  User:any={};
  UserFinal:any={};
  StepFourUser:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ToasterService:ToasterServiceProvider,  public LoadingService:LoaderServiceProvider,
     public GeneralService:GeneralServiceProvider, private WebService:WebServiceProvider,
     public NetworkService:NetworkServiceProvider, public platform: Platform, private actionSheet:ActionSheetController,
     private transfer: FileTransfer
    ) {
 }

 ionViewDidEnter() {

  /***********Check past step value*************** */
  if(this.navParams.get('userData')){
    this.StepFourUser=this.navParams.get('userData');
  }
  if(localStorage.getItem('UserStep5')!='' && localStorage.getItem('UserStep5')!=null){
    this.User=JSON.parse(localStorage.getItem('UserStep5'));
  }


  if(this.GeneralService.isEmpty(this.StepFourUser) || this.StepFourUser==undefined){
    this.navCtrl.push('RegistrationStepFourPage', {
      ErrorMsg: 'Please fill up the Step-4 first'
    });

 }
 }

  ionViewDidLoad() {

  }

  FinalRegister(){

    if((localStorage.getItem("network_connection") != 'online') && (localStorage.getItem("network_connection") == 'none'))
    {
      this.ToasterService.ShowMsg({message:'No internet connection', duration:2000});
    }else{

      localStorage.removeItem('UserStep5');
        localStorage.setItem('UserStep5', JSON.stringify(this.User));

          if(Object.keys(this.StepFourUser).length!=0 && this.StepFourUser!=undefined){
            this.UserFinal=Object.assign(this.User, this.StepFourUser);

            if(this.UserFinal.UserPhoto=='' || this.UserFinal.UserPhoto=='undefined' || this.UserFinal.UserPhoto==null){
              this.NetworkService.checkconnection();
                if((localStorage.getItem("network_connection") == 'online') || (localStorage.getItem("network_connection") != 'none')){
                this.LoadingService.ShowLoading();
                  this.WebService.UserRegistration(this.UserFinal).subscribe((Response)=>{
                    this.LoadingService.hideLoading();
                      console.log(Response)
                    if(Response.success == false){
                      let alert={message:Response.message,duration:3000}
                      this.ToasterService.ShowMsg(alert);
                    }
                    else if(Response.success == true){
                      localStorage.removeItem('UserStep1');
                      localStorage.removeItem('UserStep2');
                      localStorage.removeItem('UserStep3');
                      localStorage.removeItem('UserStep4');
                      localStorage.removeItem('UserStep5');
                      this.navCtrl.push('LoginPage');
                    }
                  },(error)=>{
                    console.log('error',  JSON.stringify(error));
                      let alert={message:'Server/Internet not working.',duration:3000}
                      this.ToasterService.ShowMsg(alert);
                  })
                }else{
                  this.LoadingService.hideLoading();
                  let alert={message:'No internet connection available.',duration:3000}
                  this.ToasterService.ShowMsg(alert);
                }


            }else{
                const fileTransfer: FileTransferObject = this.transfer.create();
                var randname=Math.random();
                let options: FileUploadOptions = {
                  fileKey: 'UserPhoto',
                  fileName: randname+'.jpg',
                  chunkedMode: false,
                  mimeType: "image/jpeg",
                  httpMethod : "POST",
                  params: {
                    UserGender:this.UserFinal.UserGender,
                    UserPhone: this.UserFinal.UserPhone,
                    UserPassword: this.UserFinal.UserPassword,
                    UserName: this.UserFinal.UserName,
                    UserEmail: this.UserFinal.UserEmail,
                    UserMls: this.UserFinal.UserMls,
                    UserNrds: this.UserFinal.UserNrds,
                    UserYrMnthLcnsd: this.UserFinal.UserYrMnthLcnsd,
                    UserDsgtnCrtftn: this.UserFinal.UserDsgtnCrtftn,
                    UserLcnsdSt: this.UserFinal.UserLcnsdSt,
                    UserLcnsdStNmbr: this.UserFinal.UserLcnsdStNmbr,
                    UserLcnsExpire: this.UserFinal.UserLcnsExpire,
                    BrokerageName: this.UserFinal.BrokerageName,
                    brokerageId: this.UserFinal.brokerageId,
                    BrokerageAddress: this.UserFinal.BrokerageAddress,
                    BrokerageMainPhone: this.UserFinal.BrokerageMainPhone,
                    BrokerageLicensedStateNumber: this.UserFinal.BrokerageLicensedStateNumber,
                    BrokerageLicenseExpire: this.UserFinal.BrokerageLicenseExpire,
                    BrokerageLicensedState: this.UserFinal.BrokerageLicensedState,
                    AddBrokerageName: this.UserFinal.AddBrokerageName,
                    AddBrokerageAddress: this.UserFinal.AddBrokerageAddress,
                    AddBrokerageMainPhone: this.UserFinal.AddBrokerageMainPhone,
                    UserNotes: this.UserFinal.UserNotes

                  }
                }

                this.NetworkService.checkconnection();
                if((localStorage.getItem("network_connection") == 'online') || (localStorage.getItem("network_connection") != 'none')){
                this.LoadingService.ShowLoading();
                var url=this.WebService.getBaseURL()+'/user/createUser/';
                fileTransfer.upload(this.UserFinal.UserPhoto,
                  url, options).then((response:any)=>{
                //   response=response.json();
                    if(response.response){
                      let data=JSON.parse(response.response);

                    if(data.success == false){
                      let alert={message:data.message,duration:3000}
                      this.ToasterService.ShowMsg(alert);

                    }
                    else if(data.success == true){
                      localStorage.removeItem('UserStep1');
                      localStorage.removeItem('UserStep2');
                      localStorage.removeItem('UserStep3');
                      localStorage.removeItem('UserStep4');
                      localStorage.removeItem('UserStep5');
                      this.navCtrl.push('LoginPage');
                    }
                  }else{
                    let alert={message:'No response found',duration:3000}
                    this.ToasterService.ShowMsg(alert);
                  }

                  },(err)=> {
                    console.log('error', JSON.stringify(err))
                    let alert={message:JSON.stringify(err),duration:3000}
                    this.ToasterService.ShowMsg(alert);
                  });
                }else{
                  this.LoadingService.hideLoading();
                  let alert={message:'No internet connection available.',duration:3000}
                  this.ToasterService.ShowMsg(alert);
                }
          }


          }else{
            this.navCtrl.push('RegistrationStepFourPage', {
              ErrorMsg: 'Please fill up the Step-4 first'
            });

          }


    }

  }


}
