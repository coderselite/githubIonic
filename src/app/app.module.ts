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
import { GithubUsers } from '../providers/github-users';
import { AuthService } from '../providers/auth-service';
import { CatalogService } from '../providers/catalog-service';

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
    TrackOrderPage
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
    TrackOrderPage
  ],

  providers: [ 
    GithubUsers,
    AuthService,
    CatalogService
  ]
})
export class AppModule {}
