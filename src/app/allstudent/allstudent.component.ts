import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-allstudent',
  templateUrl: './allstudent.component.html',
  styleUrls: ['./allstudent.component.css']
})
export class AllstudentComponent implements OnInit {
  students:any[]=[];
  constructor(private data:StateService) { }
  ngOnInit(): void {
    this.data.students.subscribe(items=>this.students=items)
  }
  isEmpty():boolean{
    return !this.students.length;
  }
}
