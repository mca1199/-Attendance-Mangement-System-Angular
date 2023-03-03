import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { UploadComponent } from './Components/upload/upload.component';
import { RecycleBinComponent } from './Components/recycle-bin/recycle-bin.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


import { StudentsRoutingModule } from '../students/students-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from './Components/report/report.component';


import { ViewattendanceComponent } from './Components/viewattendance/viewattendance.component';
import { UpdateteacherComponent } from './Components/updateteacher/updateteacher.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';
import { UpdateattendanceComponent } from './Components/updateattendance/updateattendance.component';
import { ViewstudentComponent } from './Components/viewstudent/viewstudent.component';
import { ViewteacherComponent } from './Components/viewteacher/viewteacher.component';
import { CreateattendanceComponent } from './Components/createattendance/createattendance.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    UploadComponent,
    RecycleBinComponent,
    ContactComponent,
    DashboardComponent,

    
    ReportComponent,
    ViewattendanceComponent,
    UpdateteacherComponent,
    UpdatestudentComponent,
    UpdateattendanceComponent,
    ViewstudentComponent,
    ViewteacherComponent,
    CreateattendanceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,CommonModule,
  StudentsRoutingModule,HttpClientModule ,FormsModule
  ]
})
export class AdminModule { }
