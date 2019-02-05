import { TabsPage } from './../tabs/tabs';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content, NavParams } from 'ionic-angular';
import { ToasterServiceProvider } from './../../providers/toaster-service/toaster-service';
import { NetworkServiceProvider } from './../../providers/network-service/network-service';
import { WebServiceProvider } from './../../providers/web-service/web-service';
import { LoaderServiceProvider } from './../../providers/loader-service/loader-service';
import { GeneralServiceProvider } from './../../providers/general-service/general-service';


@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  User:any={};
  UserExisting:any={};
  UserFinal:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public ToasterService:ToasterServiceProvider,  public LoadingService:LoaderServiceProvider,
      public GeneralService:GeneralServiceProvider, private WebService:WebServiceProvider,
      public NetworkService:NetworkServiceProvider) {
  }
  @ViewChild(Content) content: Content;


  ionViewDidEnter() {
    this.NetworkService.checkconnection();
    if((localStorage.getItem("network_connection") != 'online') && (localStorage.getItem("network_connection") == 'none'))
     {
        this.ToasterService.ShowMsg({message:'No internet connection', duration:2000});
     }

     if(this.navParams.get('ErrorMsg')){
      let alert = {message:this.navParams.get('ErrorMsg'),duration:2000};
          this.ToasterService.ShowMsg(alert);
    }
    if(localStorage.getItem('UserStep1')!='' && localStorage.getItem('UserStep1')!=null){
     // this.UserExisting=JSON.parse(localStorage.getItem('UserFull'));
      this.User=JSON.parse(localStorage.getItem('UserStep1'));
    }

    if(localStorage.getItem('UserToken') != null && localStorage.getItem('UserToken')!=undefined && localStorage.getItem('UserToken')!=""){
      this.navCtrl.setRoot(TabsPage);
     }
  }

  ionViewDidLoad() {

    this.User.UserPassword='';
    this.User.UserConfirmPassword='';

  }

/**********Go to step-2************* */
  registrationPage2(){

    if((localStorage.getItem("network_connection") != 'online') && (localStorage.getItem("network_connection") == 'none'))
    {
      this.ToasterService.ShowMsg({message:'No internet connection', duration:2000});
    }else{

        var i=0;
        if(this.User.UserName == '' || this.User.UserName == undefined){
          let alert = {message:'Enter your name',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(!this.GeneralService.letterOnly(this.User.UserName)){
          let alert = {message:'Special characters are not allowed on name',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.email == '' || this.User.UserEmail == undefined){
          let alert = {message:'Please enter your email',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(!this.GeneralService.validateEmail(this.User.UserEmail)){
          let alert = {message:'Please enter your valid email',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserPassword == '' || this.User.UserPassword == undefined){
          let alert = {message:'Please enter your password',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserPassword.length<8){
          let alert = {message:'Password length should be at least 8 character',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserConfirmPassword == '' || this.User.UserConfirmPassword == undefined){
          let alert = {message:'Please enter confirm password',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else if(this.User.UserPassword != this.User.UserConfirmPassword){
          let alert = {message:'Password does not match',duration:2000};
          this.ToasterService.ShowMsg(alert);
          i++;
        }else{
          localStorage.removeItem('UserStep1');
          localStorage.setItem('UserStep1', JSON.stringify(this.User));
          this.navCtrl.push('RegistrationStepTwoPage', {
            userData: this.User
          });


        }
    }
    console.log('User', this.User)
   //
  }

  login(){
    this.navCtrl.push('LoginPage');
  }

}
