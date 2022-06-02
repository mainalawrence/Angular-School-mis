import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import {FormBuilder,FormGroup,FormArray, Validators} from '@angular/forms'

@Component({
  selector: 'app-newstudents',
  templateUrl: './newstudents.component.html',
  styleUrls: ['../dashboard/dashboard.component.css','./newstudents.component.css']
})
export class NewstudentsComponent implements OnInit {

   regForm!:FormGroup;
   Courses=["_____Select____","Javascript","Typescript","Java","C++","Python","MYSQL"]
  constructor(private state:StateService,private fb:FormBuilder) { }

  ngOnInit(){
    const contacts=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.min(10)]],
    })
    this.regForm=this.fb.group({
      reg:['',Validators.required],
      name:['',Validators.required], 
      balance:['',Validators.required],
      school:['',Validators.required],
      course:['',Validators.required],
      contact:contacts
    })
    this.regForm.valueChanges.subscribe(res=>console.log(res));
  }
  getReg(){
    return this.regForm.get('reg');
  }
  getname(){
    return this.regForm.get('name');
  }
  getbalance(){
    return this.regForm.get('balance');
  }
  getcourse(){
    return this.regForm.get('course');
  }
 getschool(){
    return this.regForm.get('school');
  }
  getemail(){
    return this.regForm.get('contact')?.get('email');
  }
 getPhone(){
    return this.regForm.get('contact')?.get('phone');
  }

  onSubmit($event:any) { 
    $event.preventDefault();
    console.log(this.regForm.value); 
    this.state.addStudent(this.regForm.value);
   }
  create(data:any){

  }
  isEmpty():boolean{
    return true;
  }
}
