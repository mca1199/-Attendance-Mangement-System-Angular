import { Component } from '@angular/core';
import { TeacherSignupLoginService } from 'src/app/services/teacher-signup-login.service';


@Component({
  selector: 'app-teacher-signup-login',
  templateUrl: './teacher-signup-login.component.html',
  styleUrls: ['./teacher-signup-login.component.scss']
})
export class TeacherSignupLoginComponent {

  title = 'Attendance_Management_System';
    teachers:any;
      constructor(private teacherData:TeacherSignupLoginService){
        this.teacherData.teachers().subscribe((data)=>{
          this.teachers =data;
        });
        
      }
      getTeachersFromData(data:any){
        console.warn(data)
        this.teacherData.postTeachers(data).subscribe((teacherdata)=>{
        console.warn(teacherdata);
          
        })
      }
}
