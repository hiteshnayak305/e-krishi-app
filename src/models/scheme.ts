/**
 * A generic model that our Master-Detail products list, create, and delete.
 */
export class Scheme {

  imageURL: string;
  title: string;
  description: string;
  link: string;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Scheme {
  [prop: string]: any;
}
