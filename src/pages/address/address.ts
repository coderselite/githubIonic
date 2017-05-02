import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressService } from '../../providers/address-service';
import { AddresslistPage} from '../addresslist/addresslist';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {
  
  addressString: string;
  address_type: string;
  user_id: number;
  address = { building:'', society:'', landmark:'', city:'', postcode:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private addressService: AddressService ) {}

  addUserAddress(){
    console.log(this.address.building+" inside address...test 1");
    this.addressString = this.address.building
                          +this.address.society
                          +this.address.landmark
                          +this.address.city
                          +this.address.postcode;
    this.address_type = "Permanant";
    this.user_id = JSON.parse(sessionStorage.getItem("user"))["id"];
    console.log("inside address...test 2");
    this.addressService.addUserAddress(this.addressString, this.address_type, this.user_id);
    this.navCtrl.setRoot(AddresslistPage);
    console.log("inside address...test 5");
  }

  backToAddressList(){
    this.navCtrl.setRoot(AddresslistPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

}
