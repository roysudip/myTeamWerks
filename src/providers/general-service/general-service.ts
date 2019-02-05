import { Injectable } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';

@Injectable()
export class GeneralServiceProvider {
  constructor(private transfer: FileTransfer,
    private camera: Camera, public platform: Platform, private actionSheet:ActionSheetController) {
  }

  stripHtml(html){
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}
validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
 }

 letterNumberOnly(name) {
  var re =  /^[A-Za-z0-9' ]*$/;
  return re.test(String(name));
 }

 letterOnly(inputtxt) {
 var letters = /^[a-zA-Z\s]+$/;
 return letters.test(String(inputtxt));
 }

 validatePhone(inputtxt){
  var re =  /^\d{10}$/;
  return re.test(String(inputtxt));
 }

 isEmpty(obj) {
   var size=0;
 size= Object.keys(obj).length

 if(size>0){
   return false;
 }else{
  return true;
 }

}

isNumber(inputtxt){
  var re =  /^[0-9]+$/;
  return re.test(String(inputtxt));

}

getAllYear(){
  var Year=[];
  for(let i=2019; i<=2030; i++){
    Year.push(i);
  }
  return Year;
}

}
