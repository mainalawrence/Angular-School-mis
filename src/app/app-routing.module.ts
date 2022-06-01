import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AllstudentComponent } from './allstudent/allstudent.component';
import { LoginComponent } from './login/login.component';
import { NewstudentsComponent } from './newstudents/newstudents.component';
import { StudentWBalanceComponent } from './student-wbalance/student-wbalance.component';
import { StudentWOTBalanceComponent } from './student-wotbalance/student-wotbalance.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'addStudent', component:NewstudentsComponent,canActivate:[AdminGuard]},
  {path:'students', component:AllstudentComponent,canActivate:[AdminGuard]},
  {path:'StudentwithBalance', component:StudentWBalanceComponent,canActivate:[AdminGuard]},
  {path:'StudentwotBalance', component:StudentWOTBalanceComponent,canActivate:[AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
