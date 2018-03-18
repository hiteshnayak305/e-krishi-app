import { ContactProvider } from './../../providers/providers';
import { Contact } from './../../models/contact';
import { Network } from '@ionic-native/network';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  contact: Contact;

  constructor(public navCtrl: NavController, private network: Network, private toastCtrl: ToastController, private contactProvider: ContactProvider) {

  }

  submit(){
    this.contact = new Contact({'name':this.name, 'email':this.email, 'phone':this.phone, 'message':this.message});
    this.contactProvider.send(this.contact).subscribe((data)=>{
      //console.log(data);
      let toast = this.toastCtrl.create({
        message: 'Message sent',
        duration: 1000
      });
      toast.present();
    }, (err)=>{
      //console.log(err);
      let toast = this.toastCtrl.create({
        message: 'Message not sent!!!',
        duration: 1000
      });
      toast.present();
    })
    this.reset();
  }

  reset(){
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }

  onConnectSubscription = this.network.onConnect().subscribe(()=>{
    console.log("onConnect");
    let toast = this.toastCtrl.create({
      message: 'Connection available',
      duration: 1000
    });
    toast.present();
  });

  onDisconnectSubscription = this.network.onDisconnect().subscribe(()=>{
    console.log("onDisconnect");
    let toast = this.toastCtrl.create({
      message: 'Connection lost...',
      duration: 1000
    });
    toast.present();
  });
}
