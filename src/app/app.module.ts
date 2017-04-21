import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';
import { RegisterPage } from '../pages/register/register';
import { PlaceOrderPage } from '../pages/place-order/place-order';
import { AboutUsPage } from '../pages/about-us/about-us';
import { RateCardPage } from '../pages/rate-card/rate-card';
import { TrackOrderPage } from '../pages/track-order/track-order';
import { AddressPage } from '../pages/address/address';
import { AddresslistPage } from '../pages/addresslist/addresslist';

import { GithubUsers } from '../providers/github-users';
import { AuthService } from '../providers/auth-service';
import { CatalogService } from '../providers/catalog-service';
import { AddressService } from '../providers/address-service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    LoginPage,
    RegisterPage,
    OtpPage,
    PlaceOrderPage,
    AboutUsPage,
    RateCardPage,
    TrackOrderPage,
    AddressPage,
    AddresslistPage
  ],

  imports: [
    IonicModule.forRoot(MyApp), 
    BrowserModule, 
    ReactiveFormsModule
  ],

  bootstrap: [IonicApp],
  
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    LoginPage,
    RegisterPage,
    OtpPage,
    PlaceOrderPage,
    AboutUsPage,
    RateCardPage,
    TrackOrderPage,
    AddressPage,
    AddresslistPage
  ],

  providers: [ 
    GithubUsers,
    AuthService,
    CatalogService,
    AddressService
  ]
})
export class AppModule {}
