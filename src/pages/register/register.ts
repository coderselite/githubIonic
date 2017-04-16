import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsersPage } from '../users/users';
import { HomePage } from '../home/home';
import { OtpPage } from '../otp/otp';
import { AuthService } from '../../providers/auth-service';
import { User } from '../../models/user';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  u : OtpPage;
  loading : Loading;
  statusCode: string;
  mobiles: string[];
  register = {firstName:'', lastName:'', mobile:'', email:'', referralCode: ''};

  constructor(public nav: NavController, public navParams: NavParams, public http:Http, private auth : AuthService, private loadingCtrl : LoadingController, private alertCtrl: AlertController ) {
    console.log(this.navParams.get('param3'));
    this.register.mobile = this.navParams.get('param3');   
  }

  public registerUser(){
    this.showLoading();
    this.statusCode = this.auth.RegisterUser(this.register);
    console.log(this.statusCode);
    if(this.statusCode == "200"){
      setTimeout(()=>{
            this.loading.dismiss();
            this.nav.setRoot( HomePage );
          });
    } else {
      setTimeout(()=>{
            this.loading.dismiss();
            this.showError("Try Again");
          });
    }
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait ...'
    });
    this.loading.present();
  }

  showError(text){
    setTimeout(()=>{
      this.loading.dismiss();
    });
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
