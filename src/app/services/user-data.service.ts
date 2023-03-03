import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  students()
  {
    let url="http://localhost:8080/Getstudent";
    return this.http.get(url);
  }
  postStudents(data:any)
  {
    let url="http://localhost:8080/addstudent";
    return this.http.post(url,data);
  }
  loginStudent(loginData:any):Observable<any>{

    let url="http://localhost:8080/studentLogin";
    return this.http.post(url,loginData);
  }
  loginTeacher(loginData:any):Observable<any>{

    let url="http://localhost:8080/teacherLogin";
    return this.http.post(url,loginData);
  }

  // LoginAdminForm(admin:Admin):Observable<object>
  // {

  //   let url="http://localhost:8080/AdminLogin";
  //   console.log(admin)
  //   return this.http.post<any>(url,admin);
  // }
}

