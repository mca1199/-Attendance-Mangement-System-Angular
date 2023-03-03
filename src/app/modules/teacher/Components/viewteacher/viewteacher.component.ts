import { Component } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-viewteacher',
  templateUrl: './viewteacher.component.html',
  styleUrls: ['./viewteacher.component.scss']
})
export class ViewteacherComponent {

  title = 'Attendance_Management_System';
  teachers:any=[];

  constructor(private teacherData:TeacherService){
    

    this.teacherData.teachers().subscribe((data)=>{
      this.teachers =data;
    });
    
  }
  getTeachersFromData(data:any){
    console.warn(data)
    this.teacherData.saveTeachers(data).subscribe((teacherData)=>{
    console.warn(teacherData);
      
    })
  }
}
