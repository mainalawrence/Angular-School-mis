import { Component, OnInit } from '@angular/core';
import { StateService } from '../../Services/state.service';

@Component({
  selector: 'app-student-wotbalance',
  templateUrl: './student-wotbalance.component.html',
  styleUrls: ['./student-wotbalance.component.css']
})
export class StudentWOTBalanceComponent implements OnInit {
  students:any[]=[];
  constructor(public state:StateService) { }
  ngOnInit(): void {
  }

}
