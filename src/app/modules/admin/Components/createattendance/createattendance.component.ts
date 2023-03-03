import { Component } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-createattendance',
  templateUrl: './createattendance.component.html',
  styleUrls: ['./createattendance.component.scss']
})
export class CreateattendanceComponent {

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
