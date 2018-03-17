import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';

import { ApiProvider } from '../api/api';

/*
*  Generated class for the ProductProvider provider.
*/
@Injectable()
export class ProductProvider {

  constructor(public apiProvider: ApiProvider) {
    console.log('Hello ProductProvider.');
  }

  getProducts(queryString: string){
      let response =  this.apiProvider.get('products');

      response.subscribe(data=>{
        //console.log(data);

      },err=>{
        //console.log(err);
      });
      return response;
  }
}
