import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserAddress } from '../../models/address';
import { AddressService } from '../../providers/address-service';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {
  
  addressObj: UserAddress;
  address = { building:'', society:'', landmark:'', city:'', postcode:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private addressService: AddressService ) {}

  addUserAddress(){
    console.log(this.address.building+" inside address...test 1");
    this.addressObj.address = this.address.building
                          +this.address.society
                          +this.address.landmark
                          +this.address.city
                          +this.address.postcode;
    this.addressObj.address_type = "Permanant";
    this.addressObj.user_id = JSON.parse(sessionStorage.getItem("user"))["id"];
    console.log("inside address...test 2");
    this.addressService.addUserAddress(this.addressObj);
    console.log("inside address...test 5");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

}
