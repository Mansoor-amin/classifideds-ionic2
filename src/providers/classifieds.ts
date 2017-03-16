import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

/*
  Generated class for the Classifieds provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Classifieds {

  constructor(private af: AngularFire) {
    console.log('Hello Classifieds Provider');
  }


creatPost(data: {
    
    category:string,
    type:string,
    heading:string,
    discription:string,
    price:number,
    image: string
    user: {uid:string,id:string}

  }){
    return this.af.database.list('classifieds').push(data);
  }


}
