
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsDashboardComponent } from './Components/students-dashboard/students-dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ReportComponent } from './Components/report/report.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { ViewattendanceComponent } from './Components/viewattendance/viewattendance.component';






@NgModule({
  declarations: [
    StudentsDashboardComponent,
    HomeComponent,
    AboutComponent,
    ReportComponent,
    ContactComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AttendanceComponent,
    ViewattendanceComponent,
    
    

  ],
  imports: [
    CommonModule,
  StudentsRoutingModule,HttpClientModule ,FormsModule
  ]
})
export class StudentsModule { }
