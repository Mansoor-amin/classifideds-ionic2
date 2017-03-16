import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Auth } from './../../providers/auth';
import { UserService } from './../../providers/user-service';




import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public fb: FormBuilder, public af: AngularFire,
              public AuthService: Auth, public UserService: UserService ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createUserForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
    password1: ["", Validators.required],
    fName: ["", Validators.required],
    lName: ["", Validators.required],
    contact: ["", Validators.required]
  }); 

signup(){

  if(this.createUserForm.value.password === this.createUserForm.value.password1){

    this.AuthService.signup({email: this.createUserForm.value.email, password: this.createUserForm.value.password})
      .then((user)=>{
          localStorage.setItem('uid', user.uid);
          console.log('user created creating Profile. ')
          let profileData = {
          fName: this.createUserForm.value.fName,
          lName: this.createUserForm.value.lName,
          contact: this.createUserForm.value.contact,
          email: this.createUserForm.value.email,
          uid: user.uid
        }
          this.AuthService.createProfile(profileData)
            .then(()=>{
                this.UserService.setUser(profileData);
                // navigate to home page 
                this.navCtrl.push(HomePage)
            })
            .catch((err)=>{
                console.log(err);
            })

      })
      .catch((err)=>{
          console.log(err);
      })
  }else {
    console.log('password dont match')  
  }
};

gotoLogin(){
    this.navCtrl.push(LoginPage)
  };

}
