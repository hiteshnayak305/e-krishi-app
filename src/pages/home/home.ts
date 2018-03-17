import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Scheme } from '../../models/scheme';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  schemes: Scheme[] = [
            new Scheme({'imageURL':'https://www.indiahub.com/assets/schema/MNREGA_Overview.jpg',
                        'title':'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
                        'description':'The Act provides for a guaranteed minimum of 100 days of employment per household in rural India, along with proper work-related amenities, and special provisions for women and specially-abled workers.',
                        'link':'https://www.indiahub.com/schemes-and-services/rural-schemes/Mahatma-Gandhi-National-Rural-Employment-Guarantee-Act--MGNREGA-'}),
            new Scheme({'imageURL':'https://www.indiahub.com/assets/schema/Pradhan_Mantri_Jan_Dhan_Yojana_(PMJDY).jpg',
                        'title':'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
                        'description':'Starting from interest on deposit to accidental coverage of 1 lakh rupees, to mobile banking, to zero-balance account and availing overdraft of Rs. 5000, there are loads of benefits with PMJDY plan. It is a government initiative to let people come under the roof of banking institution more.',
                        'link':'https://www.indiahub.com/schemes-and-services/rural-schemes/Pradhan-Mantri-Jan-Dhan-Yojana--PMJDY-'})
          ];

  constructor(public navCtrl: NavController) {

  }

  openinbrowser(event: any, scheme: Scheme){
    console.log('open in browser'+scheme.title);
    window.open(scheme.link, '_blank');
  }

}
