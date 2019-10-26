import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherRequestService {

  constructor(private http: HttpClient) { }

  getTeachers(){
    return this.http.get<Teacher[]>('http://localhost/backend-acto-protocolario/teachersapi.php');
  }

  addTeacher(data: Teacher){
    return this.http.post('http://localhost/backend-acto-protocolario/teachersapi.php', data);
  }

  updateTeacher(id:string, teacher:Teacher){
    return this.http.put('http://localhost/backend-acto-protocolario/teachersapi.php/'+id, teacher);
  }

  deleteTeacher(id:string){
    return this.http.delete('http://localhost/backend-acto-protocolario/teachersapi.php/'+id);
  }
}
