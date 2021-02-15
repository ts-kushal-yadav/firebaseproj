import { DeclarationListEmitMode } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {

  private detail = new BehaviorSubject('');
  currentdetail = this.detail.asObservable()

  constructor() { }

  changedetail(detailadded: any){
    this.detail.next(detailadded)
  }
}
