import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Order } from '../../models/order';
import { CatalogService } from '../../providers/catalog-service';
import { Catalog } from '../../models/catalog';
import { AddresslistPage } from '../addresslist/addresslist';

@Component({
  selector: 'page-place-order',
  templateUrl: 'place-order.html'
})
export class PlaceOrderPage implements OnInit{

  public placeOrderForm: FormGroup;
  catalogs: Catalog[];
  addressDetails: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private catalogService: CatalogService, private placeOrderFormBuilder: FormBuilder) {
    this.addressDetails = this.navParams.get("Param3");
    catalogService.getAllCatalogs().subscribe(catalogs =>{
      this.catalogs = catalogs;
    })
  }

   ngOnInit(){
   this.placeOrderForm = this.placeOrderFormBuilder.group({
     orderType: ['', Validators.required],
     pickupDate: ['', Validators.required],     
     pickupTime: ['', Validators.required],
     deliveryDate: ['', Validators.required],     
     deliveryTime: ['', Validators.required],
     promocode: ['', Validators.required],
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
  //  console.log(model.catalogs.toString());
 }

 public addAddress(){
    this.navCtrl.setRoot(AddresslistPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceOrderPage');
  }
}
