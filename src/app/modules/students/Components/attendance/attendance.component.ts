import { Component } from '@angular/core';
import { MarkattendanceService } from 'src/app/services/markattendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {

  title = 'Attendance_Management_System';
  attendances:any;
  constructor(private attendanceData:MarkattendanceService){
    this.attendanceData.attendance().subscribe((data)=>{
      this.attendances=data;
    });
    
  }
  getAttendanceFromData(data:any){
    console.warn(data)
    this.attendanceData.addStudentAttendance(data).subscribe((attendancedata)=>{
    console.warn(attendancedata);
      
    })
  }
  

}
