import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Item } from './items';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {
 private base = '/api/items/';
  
  constructor(private http: Http) {}
  
  getItems(): Observable<Item[]> {
  return this.http.get(this.base)
  .map(response => response.json());
  }
  
  getItem(id: string | number): Observable<Item> {
	  return this.http.get(`${ this.base }${ id }` )
      .map(response => response.json());
   }

   getDate(appdate: Date): Observable<Item> {
	  return this.http.get(`${ this.base }/${ appdate }` )
      .map(response => response.json());
   }

   updateItem(id: string): Promise<Item> {
	  return this.http.get(`${ this.base }${ id }` )
      .map(response => response.json())
      .toPromise()
   }
  
  addItem(item: Item): Promise<Item> {
     console.log('adding item', item);
      return this.http.post(this.base, item) 
      .map(response => response.json())
      .toPromise()
   }

  deleteItem(id: string | number){
    console.log(`${this.base}${id}`)
    return this.http.delete(`${this.base}${id}`)
    .map(() => console.log('the listing was deleted'))
    .toPromise()
}
  search(searchString: string): Observable<Item> {
    console.log("Search for "+ searchString);
    return this.http.get(`${ this.base }${ searchString }` )
    .map(response=>response.json());
  }

}

