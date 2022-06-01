import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public state:StateService) { }
  ngOnInit(): void{
  
  }
  loggin(){
    this.state.login();

  }

}
