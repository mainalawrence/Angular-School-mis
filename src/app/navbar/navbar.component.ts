import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   loggedin?:boolean;
  constructor(public state:StateService) { 

  }
  ngOnInit(): void {
    this.state.logedin.subscribe(res=>this.loggedin=res);
  }
  logout(){
   return this.state.logout();
  }
}
