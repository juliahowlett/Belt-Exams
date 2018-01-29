import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { Item } from '../items';
import { ItemService } from '../items.service';
import { CookieService } from 'ngx-cookie';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//import * as moment from 'moment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  items: Array<Item> = [];
  item = new Item();
  errorMessages: string[] = [];

  searchString;
  searchItem: Item[];
  searchName: string;

  sub: Subscription;
  userID: string = null;

  Now = Date.now();
  Tomorrow = Date.now() + 86400000;
  CancelDate = new Date(this.Tomorrow).toISOString();
  Yesterday = Date.now() - 86400000;
  ShowDate = new Date(this.Yesterday).toISOString();

  constructor(
    private ItemService: ItemService,
    private AuthService: AuthService,
    private CookieService: CookieService,
    private Router: Router) {
}

  ngOnInit() {
    this.userID = this.CookieService.get('userId')
    console.log("logged in userID ", this.userID);

    this.ItemService.getItems()
    .subscribe(items => { 
      this.items = items; 
      console.log("items ", this.items);
    });
    
    if (!this.userID) { 
      this.Router.navigate([''])
    }
  }
 
  logout(userID){
    this.AuthService.logout()
    .then(() => {
      this.Router.navigate(['/home'])
    })
  }

  delete(id){
    this.ItemService.deleteItem(id)
    .then(() => console.log)
    
    this.ItemService.getItems()
    .subscribe(items => { 
      this.items = items; 
   });
  }
  
  search(event:Event, form: NgForm){
    event.preventDefault();
    this.searchName=this.searchString;
    console.log(this.searchString);
    this.ItemService.search(this.searchString)
      // .subscribe(searchItems=>{
      //  this.searchItem=searchItems;
      //}) 
    console.log("Appointments for " +this.searchString);
    console.log(this.searchItem);
    this.searchItem=[];
  }


  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
      }
    }
 }