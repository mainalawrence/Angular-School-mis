import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AllstudentComponent } from './allstudent/allstudent.component';
import { StudentWBalanceComponent } from './student-wbalance/student-wbalance.component';
import { StudentWOTBalanceComponent } from './student-wotbalance/student-wotbalance.component';
import { RouterModule } from '@angular/router';
import { NewstudentsComponent } from './newstudents/newstudents.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AllstudentComponent,
    StudentWBalanceComponent,
    StudentWOTBalanceComponent,
    NewstudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
