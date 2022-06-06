import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class StateService {
  
 public db:any[]=[{
  "reg": "21",
  "name": "lawrence",
  "balance": 200,
  "school": "kos",
  "course": "Javascript",
  "contact": {
    "email": "mainalawrence32@gmail.com",
    "phone": 23456789
  }
},
{
  "reg": "21",
  "name": "lawrence",
  "balance": 200,
  "school": "kos",
  "course": "Javascript",
  "contact": {
    "email": "mainalawrence32@gmail.com",
    "phone": 23456789
  }
}];
   data=new BehaviorSubject<any[]>([{
    "reg": "21",
    "name": "lawrence",
    "balance": 200,
    "school": "kos",
    "course": "Javascript",
    "contact": {
      "email": "mainalawrence32@gmail.com",
      "phone": 23456789
    }
  },
  {
    "reg": "21",
    "name": "lawrence",
    "balance": 200,
    "school": "kos",
    "course": "Javascript",
    "contact": {
      "email": "mainalawrence32@gmail.com",
      "phone": 23456789
    }
  }
]);

  private logginState=new BehaviorSubject<boolean>(false);

   logedin=this.logginState.asObservable();
   students=this.data.asObservable();
    constructor() { }

login(){
  this.logginState.next(true);
}
logout(){
  this.logginState.next(false);
}
addStudent(data:any){
  this.data.next(data);
  console.log(data);
  this.db.push(data);
  this.data.subscribe(res=>console.log(res))
 
}
  isEmpty():boolean{
    let returntype=false
     this.students.subscribe(
      (res)=>{
        returntype=!res.length}
    );
    return returntype
  }
}





































































