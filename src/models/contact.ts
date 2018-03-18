/**
 * A generic model that our Master-Detail products list, create, and delete.
 */
export class Contact {

  name: string;
  email: string;
  phone: string;
  message: string;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Product {
  [prop: string]: any;
}
