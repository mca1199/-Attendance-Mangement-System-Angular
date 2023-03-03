import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentService {

  constructor(private http:HttpClient) { }
  students()
  {
    let url="http://localhost:8080/Getstudent";
    return this.http.get(url);
  }
  saveStudents(data:any)
  {
    let url="http://localhost:8080/addstudent";
    return this.http.post(url,data);
  }
  deleteStudents(data:any)
  {
    let url="http://localhost:8080/dltStudent/";
    return this.http.delete(url=data)
  }
  updateStudents(data:any){
    let url="http://localhost:8080/updateStudent/";
    return this.http.put(url,data);
  }
  

}
