import { Component, OnInit, Output, EventEmitter, Input, ViewChild, AfterViewInit } from '@angular/core';
import {AddingComponent} from "../adding/adding.component";
import { DataService } from "../data.service";
import { Subscription,Observable } from 'rxjs';
import {UpdateserviceService} from '../updateservice.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})

export class ListingComponent implements OnInit {

  newlist = []

  items: Observable<any[]>;

  constructor(private data: DataService, private detail: UpdateserviceService,firestore: AngularFirestore) { 
    this.items = firestore.collection('userlist').valueChanges();
    console.log(this.items)
  }

  users = [
    {id: 1, name: "John Doe", email: "johndoe@gmail.com", country: "USA", phone:"444-444-4444",
  status:"active", date:"20/2/2021"}
  ]

  newusers = []
  updatedetail = ''


  ngOnInit(): void {
    this.data.currentusers.subscribe(data => this.newusers = data)
    this.detail.currentdetail.subscribe(detail => this.updatedetail = detail)
    console.log(this.users)
    if (this.newusers.length>0){
    for(let i = 0; i < this.newusers.length; i++){
      this.users.push(this.newusers[i])
    }}
  }


  deleteuser(id:any) : void{
    this.users = this.users.filter(e => e.name != id)
  }

  updateuser(name : any):void{
    this.detail.changedetail(name)
  }

}
