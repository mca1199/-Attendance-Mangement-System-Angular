import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }
  attendance()
  {
    let url="http://localhost:8080/displayattemdance";
    return this.http.get(url);
  }
  postAttendances(data:any)
  {
    let url="http://localhost:8080/addAttendancebyAdmin";
    return this.http.post(url,data);
  }
  updateAttendances(data:any){
    let url="http://localhost:8080/teacherupdateAttendance/";
    return this.http.put(url,data);
  }
  // attendance()
  // {
  //   let url="http://localhost:8080/getstudentAttendance";
  //   return this.http.get(url);
  // }
  // addStudentAttendance(data:any)
  // {
  //   let url="http://localhost:8080/addstudentAtendace";
  //   return this.http.post(url,data);
  // }
}
