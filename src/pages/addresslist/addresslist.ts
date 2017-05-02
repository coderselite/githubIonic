import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressService} from '../../providers/address-service';
import { UserAddress } from '../../models/address';
import { AddressPage } from '../address/address';
import { PlaceOrderPage } from '../place-order/place-order';

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

  public backToPlaceOrder(){
    this.navCtrl.setRoot(PlaceOrderPage);
  }

  public SelectedAddress(addressDetails:string){
      console.log(addressDetails +" is the selected address");
      this.navCtrl.setRoot(PlaceOrderPage, {
        Param3 : addressDetails
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddresslistPage');
  }
}
