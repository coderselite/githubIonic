import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Catalog } from '../models/catalog'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class CatalogService {

  washUpApiUrl = 'http://localhost:8080/WashupApp';

  constructor(public http: Http) {
    console.log('Hello CatalogService Provider');
  }

  getAllCatalogs():Observable <Catalog[]>{
    return this.http.get(this.washUpApiUrl+"/getAllCatalogs").map(res => <Catalog[]> res.json());
  }
}
