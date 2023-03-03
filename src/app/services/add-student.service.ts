import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private http:HttpClient) { }
//   students()
//   {
//     let url="http://localhost:8080/viewAllStudent";
//     return this.http.get(url);
//   }
//   saveStudents(data:any)
//   {
//     let url="http://localhost:8080/insertStudent";
//     return this.http.post(url,data);
//   }
//   deleteStudents(data:any)
//   {
//     let url="http://localhost:8080/dltStudent/";
//     return this.http.delete(url=data)
//   }
}
