import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  students:any[]=[];

  logedin:boolean=true;
  constructor() { }
  login(){
    this.logedin=!this.logedin
  }
  isEmpty():boolean{
    return !this.students.length;
  }
}
