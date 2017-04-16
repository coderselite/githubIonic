import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PlaceOrder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-place-order',
  templateUrl: 'place-order.html'
})
export class PlaceOrderPage {

  date = new Date();
  myDate: String = new Date().toISOString();
  myNextDate:String = new Date(this.date.getDate()+1).toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.myDate+" "+this.myNextDate+" "+this.date.getDate()+" "+this.date.getDay());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceOrderPage');
  }

}
