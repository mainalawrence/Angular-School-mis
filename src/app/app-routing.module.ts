import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentComponent } from './allstudent/allstudent.component';
import { LoginComponent } from './login/login.component';
import { NewstudentsComponent } from './newstudents/newstudents.component';
import { StudentWBalanceComponent } from './student-wbalance/student-wbalance.component';
import { StudentWOTBalanceComponent } from './student-wotbalance/student-wotbalance.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path:'addStudent', component:NewstudentsComponent},
  {path:'students', component:AllstudentComponent},
  {path:'StudentwithBalance', component:StudentWBalanceComponent},
  {path:'StudentwotBalance', component:StudentWOTBalanceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
