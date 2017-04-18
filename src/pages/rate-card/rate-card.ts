import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';
import { Catalog } from '../../models/catalog';

@Component({
  selector: 'page-rate-card',
  templateUrl: 'rate-card.html'
})
export class RateCardPage {

  catalog : Catalog;
  catalogs : Catalog[];
  catalogForMen : Catalog[] = [];
  catalogForWomen : Catalog[]  = [] ;
  catalogForOther : Catalog[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private catalogService: CatalogService) {
    catalogService.getAllCatalogs().subscribe(catalogs =>{
      this.catalogs = catalogs;
      console.log("testing error");
      for(var i = 0; i < catalogs.length; i++){
        console.log("testing error1");
        if(catalogs.length > 0 && catalogs[i].category == "Men"){
          console.log("testing error2");
          this.catalog = catalogs[i];
          this.catalogForMen.push(this.catalog);
        }          
        else if ( catalogs.length > 0 && catalogs[i].category == "Women")
          this.catalogForWomen.push(catalogs[i]);
        else
          this.catalogForOther.push(catalogs[i]);
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateCardPage');
    }
}