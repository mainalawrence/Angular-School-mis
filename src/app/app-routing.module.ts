import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './Services/admin.guard';
import { AllstudentComponent } from './Components/StudentView/allstudent/allstudent.component';
import { LoginComponent } from './Components/login/login.component';
import { NewstudentsComponent } from './Components/newstudents/newstudents.component';
import { StudentWBalanceComponent } from './Components/student-wbalance/student-wbalance.component';
import { StudentWOTBalanceComponent } from './Components/student-wotbalance/student-wotbalance.component';

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
