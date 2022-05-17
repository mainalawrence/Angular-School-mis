import { Component, OnInit } from '@angular/core';

interface StudenInterface{
  name:String,
  balance:Number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','../navbar/navbar.component.css']
})

export class DashboardComponent implements OnInit {
  students:StudenInterface[]=[];
  state:StudenInterface[]=[{name:"kimani",balance:200}];
  constructor() { }
  ngOnInit(): void {

  }
  isEmpty():boolean{
    if(this.students.length>0){
      return true;
    }
     return false;
  }
  create(student:StudenInterface){
    this.state.push(student);
  }
  Allstudent(){
this.students=this.state;
  }
  Withbalance(){
   this.students=this.state.filter((item):any=>{ if(item.balance<0)  return item;})
  }
  Withoutbalance(){
    this.students=this.state.filter((item):any=>{ if(item.balance>0)  return item;})
   }

}
