import { SchemeProvider } from './../../providers/providers';
import { Network } from '@ionic-native/network';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Scheme } from '../../models/scheme';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  schemes: Scheme[] = [];

  constructor(public navCtrl: NavController, private network: Network, private toastCtrl: ToastController, private schemeProvider: SchemeProvider) {
    schemeProvider.getSchemes().subscribe((data)=>{
      //console.log(data);
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.schemes.push(data[key]);
          //console.log(data[key].imageUrl);
        }
      }
    }, (err)=>{
      console.log(err)
    });
  }

  openinbrowser(event: any, scheme: Scheme){
    console.log('open in browser'+scheme.title);
    window.open(scheme.link, '_blank');
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
