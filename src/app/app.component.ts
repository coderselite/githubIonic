import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { LoginPage } from '../pages/login/login';
import { TrackOrderPage} from '../pages/track-order/track-order';
import { RateCardPage } from '../pages/rate-card/rate-card';
import { PlaceOrderPage } from '../pages/place-order/place-order';
import { AboutUsPage } from '../pages/about-us/about-us';
import { AddresslistPage } from '../pages/addresslist/addresslist';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = LoginPage ;
  pages: Array<{title: string, component: any}>;

  constructor( public platform: Platform, public menu: MenuController ) {
    this.initializeApp(); 
    // set our app's pages  
    this.pages = [
      { title: 'Home', component : HomePage},
      { title: 'Rate Card', component: RateCardPage},
      { title: 'Place Order', component: PlaceOrderPage},
      { title: 'Track Order', component: TrackOrderPage },
      { title: 'Users', component: UsersPage },
      { title: 'Repos', component: ReposPage },
      { title: 'Organisations', component: OrganisationsPage },
      { title: 'About us', component: AboutUsPage},
      { title: 'My Address', component: AddresslistPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.show();  
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
