import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  user :{
    fName: string,
    lName: string,
    contact: number,
    email: string,
    uid: string
  };
  constructor(private af: AngularFire) {
    console.log('Hello UserService Provider');

  }
  setUser(user:{
    fName: string,
    lName: string,
    contact: number,
    email: string,
    uid: string,
    $key?: string
  }){
    this.user = user;
    console.log('login user is: ' + this.getName());
  }

  getProfile (uid){
    return this.af.database.list('profiles',{
  query: {
    orderByChild: 'uid',
    equalTo: uid
  }
});
  }

  getName(){
    return this.user.fName + " " + this.user.lName;
  }
  getUser(){
    return this.user;
  }

}
