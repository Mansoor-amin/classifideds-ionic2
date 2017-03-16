import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { Auth } from './../providers/auth';
import { UserService } from './../providers/user-service';
import { Classifieds } from './../providers/classifieds';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { AboutUsPage } from '../pages/about-us/about-us';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { CartPage } from '../pages/cart/cart';
import { AddClassifiedsPage } from '../pages/add-classifieds/add-classifieds';



export const firebaseConfig = {
  apiKey: "AIzaSyCXrOk5VUcaW1DpibDz6KEeQLAoLUEJerU",
  authDomain: "classifieds-228a1.firebaseapp.com",
  databaseURL: "https://classifieds-228a1.firebaseio.com",
  storageBucket: "classifieds-228a1.appspot.com",
  messagingSenderId: "289962654022"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    AboutUsPage,
    WishlistPage,
    CartPage,
    AddClassifiedsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    AboutUsPage,
    WishlistPage,
    CartPage,
    AddClassifiedsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Auth,UserService,Classifieds]
})
export class AppModule {}
