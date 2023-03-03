import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from 'src/app/modules/teacher/Components/teacher-dashboard/teacher-dashboard.component';
import { ViewteacherComponent } from '../admin/Components/viewteacher/viewteacher.component';
import { AboutComponent } from './Components/about/about.component';

import { AttendanceComponent } from './Components/attendance/attendance.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { RecycleBinComponent } from './Components/recycle-bin/recycle-bin.component';
import { ReportComponent } from './Components/report/report.component';
import { UpdateattendanceComponent } from './Components/updateattendance/updateattendance.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';
import { UpdateteacherComponent } from './Components/updateteacher/updateteacher.component';
import { UploadComponent } from './Components/upload/upload.component';
import { ViewstudentComponent } from './Components/viewstudent/viewstudent.component';

const routes: Routes = [

  {path:'', component:TeacherDashboardComponent,children:[

    {path:'home',component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'upload', component: UploadComponent},
    {path:'recycle-bin',component:RecycleBinComponent},
    {path:'contact',component: ContactComponent},
    {path:'attendance',component: AttendanceComponent},
    {path:'report',component: ReportComponent},
    {path:'viewteacher',component:ViewteacherComponent},
    {path:'viewstudent',component:ViewstudentComponent},
    {path:'updateteacher',component:UpdateteacherComponent},
    {path:'updatestudent',component:UpdatestudentComponent},
    {path:'updateattendance',component:UpdateattendanceComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
