import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../Services/state.service';


@Component({
  selector: 'app-allstudent',
  templateUrl: './allstudent.component.html',
  styleUrls: ['./allstudent.component.css']
})
export class AllstudentComponent implements OnInit {
  students:any[]=[];
  constructor(public data:StateService) { }
  ngOnInit(): void {
    
  }
  isEmpty():boolean{
    return !this.students.length;
  }
}
