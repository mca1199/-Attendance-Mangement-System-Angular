import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ReportComponent } from './Components/report/report.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UploadComponent } from './Components/upload/upload.component';
import { RecycleBinComponent } from './Components/recycle-bin/recycle-bin.component';
import { TeacherDashboardComponent } from './Components/teacher-dashboard/teacher-dashboard.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { ViewstudentComponent } from './Components/viewstudent/viewstudent.component';
import { ViewteacherComponent } from './Components/viewteacher/viewteacher.component';
import { UpdateteacherComponent } from './Components/updateteacher/updateteacher.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';
import { UpdateattendanceComponent } from './Components/updateattendance/updateattendance.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { StudentsRoutingModule } from '../students/students-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ReportComponent,
    ContactComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UploadComponent,
    RecycleBinComponent,
    TeacherDashboardComponent,
    AttendanceComponent,
    ViewstudentComponent,
    ViewteacherComponent,
    UpdateteacherComponent,
    UpdatestudentComponent,
    UpdateattendanceComponent,
  
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule, CommonModule,
    AdminRoutingModule,CommonModule,
  StudentsRoutingModule,HttpClientModule ,FormsModule
  ]
})
export class TeacherModule { }
