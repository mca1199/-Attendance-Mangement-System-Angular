import { Component, OnInit } from '@angular/core';
import { UpdateStudentService } from 'src/app/services/update-student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})
export class UpdatestudentComponent implements OnInit {

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
  deleteStudentFormData(data:any){
  
    this.studentData.deleteStudents(data).subscribe((data)=>{
      console.warn(data);
    })
  }
  ngOnInit(): void {
    
  }
  
}
