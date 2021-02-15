import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import {UpdateserviceService} from '../updateservice.service';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss']
})
export class EditingComponent implements OnInit {

  constructor(private data: DataService, private detail: UpdateserviceService) { }

  plcname = ''
  plcemail = ''
  plccountry = ''
  plcphone = ''
  plcstatus = ''
  plcdate = ''
  allusers = []
  updatedetail = ''

  ngOnInit(): void {
    this.data.currentusers.subscribe(data => this.allusers = data)
    this.detail.currentdetail.subscribe(detail => this.updatedetail = detail)
    console.log(this.updatedetail)
    for(let i=0;i<this.allusers.length;i++){
      console.log(this.allusers[i].name)
      if(this.allusers[i].name==this.updatedetail)
      {
        this.plcname = this.allusers[i].name
        this.plcemail = this.allusers[i].email
        this.plccountry = this.allusers[i].country
        this.plcphone = this.allusers[i].phone
        this.plcstatus = this.allusers[i].status
        this.plcdate = this.allusers[i].date
        console.log('date :', this.plcdate)
        break
      }
    }
  }

  updateuser(name : any, email: any,country:any, phone:any,status:any, date: any){
    for(let i=0;i<this.allusers.length;i++){
      if(this.allusers[i].name==this.updatedetail){
        this.allusers[i].name = name
        this.allusers[i].email = email
        this.allusers[i].country = country
        this.allusers[i].phone = phone
        this.allusers[i].status = status
        this.allusers[i].date = date
        break
      }

    }
    this.data.changeUser(this.allusers)
  }



}
