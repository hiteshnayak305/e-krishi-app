import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Contact } from '../../models/contact';
/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  url: string = 'https://api-email.herokuapp.com/send';

  constructor(public http: HttpClient) {
    console.log('Hello ContactProvider Provider');
  }

  send(contact: Contact){
    var postdata = {
      'key': 'alohamora',
      'subject': 'From e-krishi client',
      'name': contact.name,
      'email': contact.email,
      'phone': contact.phone,
      'message': contact.message
    }

    var response = this.http.post(this.url, postdata);
    response.subscribe((data)=>{
      //console.log('success');
    }, (err)=>{
      //console.log(err);
    })
    return response;
  }

}
