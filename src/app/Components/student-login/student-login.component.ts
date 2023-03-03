import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {

constructor(private userData:UserDataService){}
userLogin(loginData:any){
  this.userData.loginStudent(loginData).subscribe((data)=>{console.warn(data)})
}

ngOnInit(): void {
  
}
}
