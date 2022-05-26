import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public state:StateService) { 

  }
   
  ngOnInit(): void {

  }
  
  logout(){
    this.state.login();
  }
}
