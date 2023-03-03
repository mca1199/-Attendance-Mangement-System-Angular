import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-student-signup-login',
  templateUrl: './student-signup-login.component.html',
  styleUrls: ['./student-signup-login.component.scss']
})
export class StudentSignupLoginComponent {

      title = 'Attendance_Management_System';
      students:any;
      constructor(private studentData:UserDataService){
        this.studentData.students().subscribe((data)=>{
          this.students =data;
        });
        
      }
      getStudentsFromData(data:any){
        console.warn(data)
        this.studentData.postStudents(data).subscribe((studentdata)=>{
        console.warn(studentdata);
          
        })
      }
    }    

