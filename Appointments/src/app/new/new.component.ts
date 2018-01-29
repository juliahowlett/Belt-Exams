import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { NgForm } from '@angular/forms';
import { ItemService } from '../items.service';
import { Item } from '../items';
//import * as moment from 'moment';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Output() 
  items: Array<Item> = [];
  newItem = new EventEmitter<Item>(); 
  item: Item = new Item();
  userID: string = null;

  Now = Date.now()
  DateNow = new Date(this.Now).toISOString();

  constructor(
    private ItemService: ItemService, 
    private CookieService: CookieService, 
    private Router: Router, 
    private Route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.userID = this.CookieService.get('userId')
    console.log("logged in userID ", this.userID);
    this.Now;
    this.DateNow;

    this.ItemService.getItems()
    .subscribe(items => { 
      this.items = items; 
      console.log("items ", this.items);
    });

    if (!this.userID) { 
      this.Router.navigate([''])
    }
  }

/* Checkdate(form: NgForm){
  this.ItemService.getDate(form.value.appdate)
  .then(result => console.log(result))
  .catch(error => console.log(error))
} */

  OnSubmit(event: Event, form: NgForm){
    event.preventDefault();
    this.item.owner=this.userID;

    this.ItemService.addItem(this.item)
   .then(item => console.log(item))
    .catch(error => console.log(error))

    this.item = new Item();
      console.log('adding new appointment');
      this.Router.navigate(['dashboard']);
  } 
  
}