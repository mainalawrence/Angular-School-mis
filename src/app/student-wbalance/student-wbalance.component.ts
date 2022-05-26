import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-student-wbalance',
  templateUrl: './student-wbalance.component.html',
  styleUrls: ['./student-wbalance.component.css']
})
export class StudentWBalanceComponent implements OnInit {

  constructor(public state:StateService) { }
  students:any[]=[];
  ngOnInit(): void {
  }

}
