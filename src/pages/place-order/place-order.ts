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

  public placeOrderForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private placeOrderFormBuilder: FormBuilder) {
  }

   ngOnInit(){
   this.placeOrderForm = this.placeOrderFormBuilder.group({
     catalogs: this.placeOrderFormBuilder.array([
       this.initCatalog(),
     ])
   });
 }

 initCatalog(){
   return this.placeOrderFormBuilder.group({
     catalog_id:['', Validators.required],
     quantity: ['', Validators.required]
   })
 }

 addCatalog(){
   const control = <FormArray>this.placeOrderForm.controls['catalogs'];
   control.push(this.initCatalog());
 }

 removeCatalog(i: number){
   const control = <FormArray>this.placeOrderForm.controls['catalogs'];
   control.removeAt(i);
 }

 save(model: Order){
   console.log(model.catalogs.toString());
 }

    ionViewDidLoad() {
      console.log('ionViewDidLoad PlaceOrderPage');
    }
}
