import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Order } from '../../models/order';

/*
  Generated class for the PlaceOrder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-place-order',
  templateUrl: 'place-order.html'
})
export class PlaceOrderPage implements OnInit{

  public myForm: FormGroup;
  public pickupdate : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _fb: FormBuilder) {
  }

  ngOnInit() {
    // we will initialize our form here
    this.myForm = this._fb.group({
            pickupDate: [''],
            orderType: [''],
            timeSlot: [''],
            addresses: this._fb.array([
                this.initAddress(),
            ]),
            catalogs : this._fb.array([
              this.initCatalog(),
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

    initCatalog(){
      return this._fb.group({
        catalog_id : [''],
        quantity : ['']
      });
    }

    addAddress() {
        // add address to the list
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    addCatalog(){
      const control = <FormArray>this.myForm.controls['catalogs'];
      control.push(this.initCatalog());
    }

    removeAddress(i: number) {
        // remove address from the list
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    removeCatalog(i: number) {
        // remove address from the list
        const control = <FormArray>this.myForm.controls['catalogs'];
        control.removeAt(i);
    }

    save(model: Order) {
        // call API to save customer
        console.log(model);
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad PlaceOrderPage');
    }
}
