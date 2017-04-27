import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressService} from '../../providers/address-service';
import { UserAddress } from '../../models/address';
import { AddressPage } from '../address/address';

@Component({
  selector: 'page-addresslist',
  templateUrl: 'addresslist.html'
})
export class AddresslistPage {

  addresses: UserAddress[];
 addressList = { selectedAddress: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private addressService: AddressService) {
    addressService.getAllAddressesOfUser(JSON.parse(sessionStorage.getItem("user"))["id"]).subscribe(addresses =>{
      this.addresses = addresses;
      console.log(addresses.toString());
    });
  }

  addAddress(){
    this.navCtrl.setRoot(AddressPage);
  }

  SelectedAddress(){
      console.log(this.addressList.selectedAddress+" is the selected address");
      this.navCtrl.setRoot(AddressPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddresslistPage');
  }
}
