import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthService } from '../../providers/auth-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
    
  }

  ionViewDidLoad() {
    console.log(JSON.parse(sessionStorage.getItem("user"))["id"]+" testing...HomePage");
    console.log('ionViewDidLoad HomePage');
  }

}
