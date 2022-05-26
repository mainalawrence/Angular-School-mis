import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-newstudents',
  templateUrl: './newstudents.component.html',
  styleUrls: ['../dashboard/dashboard.component.css','./newstudents.component.css']
})
export class NewstudentsComponent implements OnInit {

  constructor(private state:StateService) { }

  ngOnInit(): void {
  }
  create(datta:any){

  }
  isEmpty():boolean{
    return !this.state.students.length;
  }
}
