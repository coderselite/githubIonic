import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthService } from '../../providers/auth-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: User;
  public user_id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
    this.auth.getUserDetails(this.navParams.get('param4')).subscribe( user =>{
      this.user = user;
      this.user_id = user.userId;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
