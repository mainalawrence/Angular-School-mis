import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../Services/state.service';


@Component({
  selector: 'app-allstudent',
  templateUrl: './allstudent.component.html',
  styleUrls: ['./allstudent.component.css']
})
export class AllstudentComponent implements OnInit {
  students:any[]=[];
  constructor(public data:StateService,private route:Router) { }
  ngOnInit(): void {
    this.students=this.data.db;
  }
  isEmpty():boolean{
    return !this.students.length;
  }
  HandlestudentsRoute():boolean{
    if(this.route.url==='/students'){
      return true;
    } 
return false;
  }
  HandlestudentswbalanceRoute():boolean{
    console.log(this.route.url);
    if(this.route.url as string ==='/StudentwithBalance'){
      this.students=this.students.filter(item=>{
        if(item.balance>1){
          return item;
        }
      })
      return true;
    }
    return false;
  }
    HandlestudentswotRoute():boolean{
      console.log(this.route.url);
      
      if(this.route.url as string==='/StudentwotBalance'){
        this.students=this.students.filter(item=>{
          if(item.balance<1){
            return item;
          }
        })
        return true;
      }
      return false;
    }
}
