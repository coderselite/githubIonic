import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserAddress } from '../../models/address';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage implements OnInit {


 public myAddressForm : FormGroup;
 home: HomePage;
 

 constructor(public navCtrl: NavController, public navParams: NavParams, private addressFormBuilder : FormBuilder) {
 }

 ngOnInit(){
   this.myAddressForm = this.addressFormBuilder.group({
     addresses: this.addressFormBuilder.array([
       this.initAddress(),
     ])
   });
 }

 initAddress(){
   return this.addressFormBuilder.group({
     building:['', Validators.required],
     society: ['', Validators.required],
     area: ['', Validators.required],
     city: ['', Validators.required],
     postCode: ['', Validators.required]
   })
 }

 addAddress(){
   const control = <FormArray>this.myAddressForm.controls['addresses'];
   control.push(this.initAddress());
 }

 removeAddress(i: number){
   const control = <FormArray>this.myAddressForm.controls['addresses'];
   control.removeAt(i);
 }

 save(model: UserAddress){
   console.log(model);
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

}
