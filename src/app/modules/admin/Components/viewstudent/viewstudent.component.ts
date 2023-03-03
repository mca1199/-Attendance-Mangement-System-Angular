import { Component } from '@angular/core';
import { UpdateStudentService } from 'src/app/services/update-student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.scss']
})
export class ViewstudentComponent {

  title = 'Attendance_Management_System';
  students:any=[];
  constructor(private studentData:UpdateStudentService)
  {
    
    this.studentData.students().subscribe((data)=>{
      this.students =data;
    });
    
  }
  getStudentsFromData(data:any)
  {
    console.warn(data)
    this.studentData.saveStudents(data).subscribe((studentData)=>{
    console.warn(studentData);
      
    })
  } 

}
