import { Http, Response,RequestOptions ,Headers} from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebServiceProvider {
 baseURL = 'http://192.168.1.17:3000';
  //baseURL='https://nodeserver.brainiuminfotech.com:6091';
  constructor(public http: Http) {
  }

    private _errorHandler(error: Response) {
    return Observable.throw(error || "Server Error");
  }

  /***************Base URL****************** */
  getBaseURL(){
    return this.baseURL;
  }

  /*****************User Registration******************* */
  UserRegistration(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    var url = this.baseURL+'/user/createUserWithoutImage';
    return this.http.post(url,data,options)
    .map((response: Response) => response.json())
    .catch(this._errorHandler);
  }
/******************License state list***************** */
getLicencedStateList(){
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   let options = new RequestOptions({ headers: headers });
   var url = this.baseURL+'/user/getLicencedStateList';
   return this.http.get(url)
   .map((response: Response) => response.json())
   .catch(this._errorHandler);
}
/******************Designation & Certificate List***************** */
getDesignationsList(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });
  var url = this.baseURL+'/user/getDesignationsList';
  return this.http.get(url)
  .map((response: Response) => response.json())
  .catch(this._errorHandler);
}

/**************Broker Company Search********************** */
getBrokerCompany(SearchKey){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });
  var url = this.baseURL+'/user/brokerageList?brokerageName='+SearchKey+'';
  console.log(url)
  return this.http.get(url)
  .map((response: Response) => response.json())
  .catch(this._errorHandler);
}

 /*****************User Login******************* */
 UserLogin(data){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });
  var url = this.baseURL+'/user/signIn';
  return this.http.post(url,data,options)
  .map((response: Response) => response.json())
  .catch(this._errorHandler);
}

/*****************Create Request Service Add******************* */
AddRequestService(data, UserToken){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', UserToken);
  let options = new RequestOptions({ headers: headers });
  var url = this.baseURL+'/user/createServiceRequest';
  return this.http.post(url,data,options)
  .map((response: Response) => response.json())
  .catch(this._errorHandler);
}

/*****************Create Request Service Add******************* */
getMyRequestService(start, limit, UserToken){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', UserToken);
  let options = new RequestOptions({ headers: headers });
  var url = this.baseURL+'/user/myServicerequestList?skip='+start+'&limit='+limit;
  return this.http.get(url, options)
  .map((response: Response) => response.json())
  .catch(this._errorHandler);
}



}
