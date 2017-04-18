import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsersPage } from '../users/users';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  statusCode: string;
  mobile : string;

  register = {firstName:'', lastName:'', mobile:'', email:'', referralCode: ''};

  constructor(public nav: NavController, public navParams: NavParams, public http:Http, private auth : AuthService) { 
    this.mobile = this.navParams.get('param3');
    this.register.mobile = this.navParams.get('param3');
    }

  public registerUser(){
    this.auth.registerUser(this.register);
    
    this.nav.setRoot(HomePage);
  }

  // postRequest(){
  //   var headers = new Headers();
  //   headers.append("Accept",'application/json');
  //   headers.append('Content-Type','application/json');
  //   let options = new RequestOptions({headers:headers});
  //   let postParams = {
  //     firstName:this.register.firstName,
  //     lastName:this.register.lastName,
  //     mobile:this.register.mobile,
  //   }
  //   this.http.post("http://localhost:8080/WashupApp/addUser",postParams,options)
  //   .subscribe(data =>{
  //     console.log(data['_body']);
  //   },error =>{
  //     console.log(error);
  //   });

  //   this.nav.setRoot(UsersPage);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
