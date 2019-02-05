import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { ToasterServiceProvider } from './../../providers/toaster-service/toaster-service';
import { NetworkServiceProvider } from './../../providers/network-service/network-service';
import { WebServiceProvider } from './../../providers/web-service/web-service';
import { LoaderServiceProvider } from './../../providers/loader-service/loader-service';
import { GeneralServiceProvider } from './../../providers/general-service/general-service';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';

@IonicPage()
@Component({
  selector: 'page-registration-step-two',
  templateUrl: 'registration-step-two.html',

})
export class RegistrationStepTwoPage {
  ViewRawImg:any='';
  userBase64Image:any='';
  User:any={};
  UserFinal:any={};
  StepOneUser:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ToasterService:ToasterServiceProvider,  public LoadingService:LoaderServiceProvider,
     public GeneralService:GeneralServiceProvider, private WebService:WebServiceProvider,
     public NetworkService:NetworkServiceProvider, public platform: Platform, private actionSheet:ActionSheetController
     , public domSanitizer: DomSanitizer,private transfer: FileTransfer,
     private camera: Camera,     ) {
 }

 ionViewDidEnter() {

  /***********Check past step value*************** */
  if(localStorage.getItem('UserStep2')!='' && localStorage.getItem('UserStep2')!=null){
    this.User=JSON.parse(localStorage.getItem('UserStep2'));
  }



 }

  ionViewDidLoad() {
    //this.User=this.navParams.get('userData');
    if(this.navParams.get('userData')){
      this.StepOneUser=this.navParams.get('userData');
    }
    if(this.GeneralService.isEmpty(this.StepOneUser) || this.StepOneUser==undefined){
      this.navCtrl.push('RegistrationPage', {
        ErrorMsg: 'Please fill up the Step-1 first'
      });

    }

  }

  registrationPage3(){

    if((localStorage.getItem("network_connection") != 'online') && (localStorage.getItem("network_connection") == 'none'))
    {
      this.ToasterService.ShowMsg({message:'No internet connection', duration:2000});
    }else{
        var i=0;
        if(this.User.UserGender == '' || this.User.UserGender == undefined){
          let alert = {message:'Please select your gender',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserPhone == '' || this.User.UserPhone == undefined){
          let alert = {message:'Please enter your phone number',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(!this.GeneralService.validatePhone(this.User.UserPhone)){
          let alert = {message:'Please enter your valid phone',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }/*else if(this.ViewRawImg == '' || this.ViewRawImg == undefined){
          let alert = {message:'Please upload your photo',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }*/else{


            this.User.UserPhoto=this.ViewRawImg;
            localStorage.removeItem('UserStep2');
            localStorage.setItem('UserStep2', JSON.stringify(this.User));
          if(Object.keys(this.StepOneUser).length!=0 && this.StepOneUser!=undefined){
            this.UserFinal=Object.assign(this.User, this.StepOneUser);


            this.navCtrl.push('RegistrationStepThreePage', {
              userData: this.UserFinal
            });
          }else{
            this.navCtrl.push('RegistrationPage', {
              ErrorMsg: 'Please fill up the Step-1 first'
            });

          }

        }
    }

  }

  imageUpload(){
    let actionSheet = this.actionSheet.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }

            this.camera.getPicture(options).then((imageData) => {
              console.log('imageData', imageData)
              this.ViewRawImg=imageData;
              //this.userBase64Image='data:image/jpeg;base64,' + this.ViewRawImg;
              //this.userBase64Image=imageData;
             }, (err) => {
              let alert = {message:'Unable to upload your photo',duration:2000};
              this.ToasterService.ShowMsg(alert);
             });
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType : this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit : true
            }

            this.camera.getPicture(options).then((imageData) => {

              console.log('imageData', imageData)
              this.ViewRawImg=imageData;
              //this.userBase64Image='data:image/jpeg;base64,' + this.ViewRawImg;
              this.userBase64Image=imageData;

             }, (err) => {
              let alert = {message:'Unable to upload your photo',duration:2000};
               this.ToasterService.ShowMsg(alert);
             });

          }
        },
  ]
});
actionSheet.present();
  }





}
