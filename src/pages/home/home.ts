import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from './../../providers/user-service';

import { AboutUsPage } from './../about-us/about-us';
import { WishlistPage } from './../wishlist/wishlist';
import { CartPage } from './../cart/cart';
import { AddClassifiedsPage } from './../add-classifieds/add-classifieds';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items : FirebaseListObservable<any[]>;
  user;
  constructor(public navCtrl: NavController,af: AngularFire, private UserService: UserService) {
    this.user = this.UserService.getUser();
    this.items = af.database.list('/items');
    console.log(this.user)
    console.log(this.items)
  }

  navigateToAbout(){
    this.navCtrl.push(AboutUsPage);
  }

  navigateToMyCar(){
    this.navCtrl.push(CartPage);
  }

   navigateToWishlist(){
    this.navCtrl.push(WishlistPage);
  }

  navigateToAddClassified(){
    this.navCtrl.push(AddClassifiedsPage,{
	user: {uid : this.user.uid, key : this.user.$key}
});
  }
}
