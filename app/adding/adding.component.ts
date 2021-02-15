import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss']
})
export class AddingComponent implements OnInit {

  public newusers = []
  public id = 1
  oneuser = []
  constructor(private data: DataService) { }

  adduser(name : any, email: any,country:any, phone:any,status:any, date: any):void{
    this.newusers.push({"name":name, "email":email,"country":country, "phone":phone,"status":status,"date":date})
    this.oneuser = [{"name":name, "email":email,"country":country, "phone":phone,"status":status,"date":date}]
    this.data.changeUser(this.newusers)
  }

  ngOnInit(): void {
    this.data.currentusers.subscribe(data => this.newusers = data)
    console.log(this.newusers)
  }



}
