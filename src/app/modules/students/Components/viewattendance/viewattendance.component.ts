import { Component } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { MarkattendanceService } from 'src/app/services/markattendance.service';

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.scss']
})
export class ViewattendanceComponent {

  title = 'Attendance_Management_System';
  attendances:any;
  constructor(private attendanceData:AttendanceService){
    this.attendanceData.attendance().subscribe((data)=>{
      this.attendances=data;
    });
    
  }
  getAttendanceFromData(data:any){
    console.warn(data)
    this.attendanceData.postAttendances(data).subscribe((attendancedata)=>{
    console.warn(attendancedata);
      
    })
  }


}
