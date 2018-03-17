import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  email: string = '';
  phone: string = '';
  message: string = '';

  constructor(public navCtrl: NavController) {

  }

  submit(){
    this.navCtrl.popToRoot();
  }

  reset(){
    this.email = '';
    this.phone = '';
    this.message = '';
  }

}
