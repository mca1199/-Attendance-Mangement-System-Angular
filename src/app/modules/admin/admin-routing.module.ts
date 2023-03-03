import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AboutComponent } from './Components/about/about.component';


import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CreateattendanceComponent } from './Components/createattendance/createattendance.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { RecycleBinComponent } from './Components/recycle-bin/recycle-bin.component';
import { ReportComponent } from './Components/report/report.component';

import { UpdateattendanceComponent } from './Components/updateattendance/updateattendance.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';
import { UpdateteacherComponent } from './Components/updateteacher/updateteacher.component';
import { UploadComponent } from './Components/upload/upload.component';


import { ViewattendanceComponent } from './Components/viewattendance/viewattendance.component';
import { ViewstudentComponent } from './Components/viewstudent/viewstudent.component';
import { ViewteacherComponent } from './Components/viewteacher/viewteacher.component';

const routes: Routes = [
{path: '',component:AdminDashboardComponent, children:[

  {path:'home',component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'upload', component: UploadComponent},
  {path:'recycle-bin',component:RecycleBinComponent},
  {path:'contact',component: ContactComponent},
  {path:'dashboard',component:DashboardComponent},
  
  
  {path:'viewstudent',component:ViewstudentComponent},
  {path:'viewteacher',component:ViewteacherComponent},
  {path:'createattendance',component:CreateattendanceComponent},
  {path:'report',component:ReportComponent},
  {path:'updatestudent',component:UpdatestudentComponent},
  {path:'updateteacher',component:UpdateteacherComponent},
  {path:'updateattendance',component:UpdateattendanceComponent},
  {path:'viewattendance',component:ViewattendanceComponent}


]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
