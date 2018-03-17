import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  products: Product[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider) {
  }

  ionViewDidLoad() {
    this.productProvider.getProducts('').subscribe((result)=>{
      var data = result;
      //console.log(data);
      for (const key in data) {
        //console.log(data[key]);
        this.products.push(new Product({'imageURL':data[key].imageURL, 'title':data[key].title, 'description':data[key].description, 'price':data[key].price}));
      }
      console.log(this.products);
    }, (err)=>{
      console.log(err);
    });
    console.log('ionViewDidLoad ProductsPage');
  }

}
