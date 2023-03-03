import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';

import { AttendanceComponent } from './Components/attendance/attendance.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { ReportComponent } from './Components/report/report.component';
import { StudentsDashboardComponent } from './Components/students-dashboard/students-dashboard.component';
import { ViewattendanceComponent } from './Components/viewattendance/viewattendance.component';




const routes: Routes = [
  {path: '',component:StudentsDashboardComponent, children:[

    {path:'home',component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'report', component: ReportComponent},
    {path:'contact',component: ContactComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'attendance',component:AttendanceComponent},
    {path:'viewattendance',component:ViewattendanceComponent},
    
    
  
]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
