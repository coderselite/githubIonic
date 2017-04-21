import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { UserAddress } from '../models/address';
import 'rxjs/add/operator/map';

@Injectable()
export class AddressService {

  washUpApiUrl = 'http://localhost:8080/WashupApp';
  statusCode: string;

  constructor(public http: Http) {
    console.log('Hello AddressService Provider');
  }

  addUserAddress(addressString, addressType, userId){ 
    console.log("inside address...test 4");
    var headers = new Headers();
    headers.append("Accept",'application/json');
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers:headers});
    let postParams = {
      address: addressString,
      address_type: addressType,
      user_id: userId,
    }
    this.http.post(this.washUpApiUrl+"/addAddress",postParams, options)
      .subscribe(data =>{
        console.log(data.status.toString()+" inside address...test 5");
        return data.status.toString();
      },error =>{
        console.log(error);
      });
      return this.statusCode;
  }  

  getAllAddressesOfUser(userId):Observable <UserAddress[]>{
    return this.http.get(this.washUpApiUrl+"/getAddress/userid/"+userId).map(res => <UserAddress[]>res.json());
  }
}
