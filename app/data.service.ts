import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users = new BehaviorSubject([]);
  currentusers = this.users.asObservable();

  constructor() { }

  changeUser(useradded: any) {
    this.users.next(useradded)
  }
}
