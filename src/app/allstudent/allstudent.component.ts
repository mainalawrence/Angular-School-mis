import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allstudent',
  templateUrl: './allstudent.component.html',
  styleUrls: ['./allstudent.component.css']
})
export class AllstudentComponent implements OnInit {
  students:any[]=[];
  constructor() { }
  ngOnInit(): void {
  }
  isEmpty():boolean{
    return !this.students.length;
  }
}
