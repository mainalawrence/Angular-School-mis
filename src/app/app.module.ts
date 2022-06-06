import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { AllstudentComponent } from './Components/StudentView/allstudent/allstudent.component';
import { StudentWBalanceComponent } from './Components/student-wbalance/student-wbalance.component';
import { StudentWOTBalanceComponent } from './Components/student-wotbalance/student-wotbalance.component';
import { RouterModule } from '@angular/router';
import { NewstudentsComponent } from './Components/newstudents/newstudents.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';

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
    NewstudentsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
