import { Component, OnInit } from '@angular/core';
// import { TeacherService } from 'src/app/services/teacher.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit{

  constructor(private teacherloginData:UserDataService){}
  teacherLogin(loginData:any){
    this.teacherloginData.loginTeacher(loginData).subscribe((data)=>{console.warn(data)})
  }
  
  ngOnInit(): void {
    
  }

}
