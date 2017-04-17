import { Component, OnInit} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
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
export class PlaceOrderPage implements OnInit {

  myDate: String = new Date().toISOString();
  public myForm : FormGroup; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private _fb : FormBuilder) { }

  ngOnInit() {
    // we will initialize our form here
    this.myForm = this._fb.group({
      myDate :[''],
      orderType : [''],
      timeSlot : [''],
      addresses: this._fb.array([
                this.initAddress(),
            ])
    });
  }

  initAddress() {
        // initialize our address
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress() {
      // add address to the list
      const control = <FormArray>this.myForm.controls['addresses'];
      control.push(this.initAddress());
  }

removeAddress(i: number) {
    // remove address from the list
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
}


  // save(model: Customer) {
  //     // call API to save customer
  //     console.log(model);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceOrderPage');
  }
}
