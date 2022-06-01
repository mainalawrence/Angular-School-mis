import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class StateService {
  students:any[]=[];

  private logginState=new BehaviorSubject<boolean>(false);
   logedin=this.logginState.asObservable();
    constructor() { }

login(){
  this.logginState.next(true);
}
logout(){
  this.logginState.next(false);
}
  isEmpty():boolean{
    return !this.students.length;
  }
}





































































