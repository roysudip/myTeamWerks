import { TabsPage } from './../tabs/tabs';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content, NavParams, Platform, ActionSheetController, Events } from 'ionic-angular';
import { ToasterServiceProvider } from './../../providers/toaster-service/toaster-service';
import { NetworkServiceProvider } from './../../providers/network-service/network-service';
import { WebServiceProvider } from './../../providers/web-service/web-service';
import { LoaderServiceProvider } from './../../providers/loader-service/loader-service';
import { GeneralServiceProvider } from './../../providers/general-service/general-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:any;
  password:any;
  tabBarElement: any;
  User:any={};
  KeepLogIn:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ToasterService:ToasterServiceProvider,  public LoadingService:LoaderServiceProvider,
     public GeneralService:GeneralServiceProvider, private WebService:WebServiceProvider,
     public NetworkService:NetworkServiceProvider, public platform: Platform, private actionSheet:ActionSheetController,
     public events: Events
   ) {
    // console.log("fgfgf",this.navCtrl.getActive().name)
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidEnter() {
    if(localStorage.getItem('UserToken') != null && localStorage.getItem('UserToken')!=undefined && localStorage.getItem('UserToken')!=""){
      this.navCtrl.push(TabsPage);
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registration(){
    this.navCtrl.push('RegistrationPage');
  }
  forgotPassword(){
    this.navCtrl.push('PasswordAssistancePage');
  }

  onSignIn(){
      if((localStorage.getItem("network_connection") != 'online') && (localStorage.getItem("network_connection") == 'none'))
      {
        this.ToasterService.ShowMsg({message:'No internet connection', duration:2000});
      }else{

          var i=0;
          if(this.User.UserLogin == '' || this.User.UserLogin == undefined){
            let alert = {message:'Enter your email or mobile number',duration:2000};
            this.ToasterService.ShowMsg(alert);
            i++;
          }else if(this.User.UserPassword == '' || this.User.UserPassword == undefined){
            let alert = {message:'Enter your password',duration:2000};
            this.ToasterService.ShowMsg(alert);
            i++;
          }else{
            this.LoadingService.ShowLoading();
            this.WebService.UserLogin(this.User).subscribe((Response)=>{
              this.LoadingService.hideLoading();
              console.log('Response', Response)
              if(Response.success == false){
                let alert={message:Response.message,duration:3000}
                this.ToasterService.ShowMsg(alert);
              }
              else if(Response.success == true){
                this.User={};
                if(this.KeepLogIn==true){
                  localStorage.setItem('KeepLogIn', '1');
                }
                localStorage.setItem('UserName', Response.data.UserName);
                localStorage.setItem('UserEmail', Response.data.UserEmail);
                localStorage.setItem('UserPhoto', Response.data.UserPhoto);
                localStorage.setItem('UserGender', Response.data.UserGender);
                localStorage.setItem('UserId', Response.data._id);
                localStorage.setItem('UserToken', Response.token);

                this.events.publish('loginCheck', 'Test1');

                this.navCtrl.setRoot(TabsPage);
              }
            },(error)=>{
              console.log('error',  JSON.stringify(error));
                let alert={message:'Server/Internet not working.',duration:3000}
                this.ToasterService.ShowMsg(alert);
            })
          }
    }
}



}
