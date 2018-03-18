import { Network } from '@ionic-native/network';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ProductProvider } from './../../providers/providers';
import { Product } from '../../models/product';
/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  searchResult: Product[] = [];
  search: Product[] = [];
  searchQuery: string = '';
  searchString: string = '';
  products: Product[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private network: Network, private toastCtrl: ToastController, private productProvider: ProductProvider) {
  }

  ionViewDidLoad() {
    this.productProvider.getProducts('').subscribe((result)=>{
      var data = result;
      //console.log(data);
      for (const key in data) {
        //console.log(data[key]);
        this.products.push(new Product({'imageURL':data[key].imageURL, 'title':data[key].title, 'description':data[key].description, 'price':data[key].price}));
      }
      this.searchResult = this.products;
      //console.log(this.products);
    }, (err)=>{
      console.log(err);
      let toast = this.toastCtrl.create({
        message: 'Error occured while fetching...',
        duration: 2000
      });
      toast.present();
    });
    console.log('ionViewDidLoad ProductsPage');
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


  getItems(event: any) {

    this.searchQuery = this.searchString;
    // if the value is an empty string don't filter the items
    if (this.searchQuery && this.searchQuery.trim() != '') {
      this.products = [];
      this.products = this.searchResult;
      const regex = new RegExp(this.escapeRegex(this.searchQuery), 'gi');
      for (const key in this.products) {
        if (this.products.hasOwnProperty(key)) {
          if(regex.test(this.products[key].title)) {
            this.search.push(this.products[key]);
          }
        }
      }
      this.products = [];
      this.products = this.search;
      this.search = [];
    }
  }

  escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
}
