import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Scheme } from '../../models/scheme';
/*
  Generated class for the SchemeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SchemeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SchemeProvider Provider');
  }

  getSchemes(){
    let response =  this.http.get('https://hint-18.herokuapp.com/data');

    response.subscribe(data=>{
      //console.log(data);

      },err=>{
        //console.log(err);
      });
      return response;
  }
}
