import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkattendanceService {

  constructor(private http:HttpClient) { }
  
  attendance()
  {
    let url="http://localhost:8080/getstudentAttendance";
    return this.http.get(url);
  }
  addStudentAttendance(data:any)
  {
    let url="http://localhost:8080/addstudentAtendace";
    return this.http.post(url,data);
  }
}
