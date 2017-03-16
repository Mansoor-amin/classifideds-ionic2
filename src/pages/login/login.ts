import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Auth } from './../../providers/auth';
import { UserService } from './../../providers/user-service';

import { HomePage } from '../home/home';
import { SignUpPage } from '../sign-up/sign-up';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fb: FormBuilder, public af: AngularFire,
              public AuthService: Auth, public UserService: UserService) {

              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  login(){
      this.AuthService.login({email: this.loginForm.value.email, password: this.loginForm.value.password})
        .then((user)=>{
          localStorage.setItem('uid', user.uid);
          console.log(user.uid);

          this.UserService.getProfile(user.uid)
            .subscribe((val)=>{
              console.log(val);
              this.UserService.setUser(val[0]);
              // navigate to home page 
              this.navCtrl.push(HomePage);
            })
        })
        .catch((err)=>{
            console.log(err);
        })
  };
  gotoSignUp(){
    this.navCtrl.push(SignUpPage)
  };

}
