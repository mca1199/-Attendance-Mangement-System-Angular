import { Component } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.scss']
})
export class UpdateteacherComponent {

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
