import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherRequestService } from '../services/teacher-request.service';
import {Teacher} from '../models/teacher';

@Component({
  selector: 'app-teacherscontrol',
  templateUrl: './teacherscontrol.component.html',
  styleUrls: ['./teacherscontrol.component.css']
})
export class TeacherscontrolComponent implements OnInit {

  teacherFormGroup:  FormGroup;
  constructor(private navBarService: NavbarService,
    private _formBuilder: FormBuilder,
    private teacherService:TeacherRequestService) { }
  teachers: Teacher[];
  teacherSelected = null;

  ngOnInit() {
    this.navBarService.show();
    this.navBarService.isAdmin();
    this.updateTable();
    let teacherControlBuilder = {
      noAfiliacion: ['', Validators.required],
      nombre: ['', Validators.required],
      aPaterno: ['', Validators.required],
      aMaterno: ['', Validators.required],
      fechaNa: ['', Validators.required],
      tipoSangre: ['', Validators.required],
      enfermedades: ['', Validators.required],
      alergias: ['', Validators.required]
    };

    this.teacherFormGroup = this._formBuilder.group(teacherControlBuilder);

  }

  private updateTable(){
    this.teacherService.getTeachers().subscribe( (data: Teacher[]) =>{
      this.teachers = data;
      console.log(data);
    });
  }

  delete(teacher: Teacher){
    
  }

  openForEdit(teacher){
    this.teacherSelected = teacher;
    this.teacherFormGroup.setValue(teacher);
  }

  saveOrEdit(){
    let newTeacher = this.teacherFormGroup.value;
    
    if(this.teacherSelected !== null){
      //EDIT
      this.teacherService.updateTeacher(this.teacherSelected.controlNumber, newTeacher).subscribe(
        data=> {
          console.log("PUT Request is successful", data);
          this.updateTable();
          this.clear();
        },
        error => {
          console.log("Error", error.error);
        }
      )
    } else{
      this.teacherService.addTeacher(newTeacher).subscribe(
        data  => {
        console.log("POST Request is successful ", data);
        this.updateTable();
        this.clear();
        },
        error  => {
        
        console.log("Error", error.error);
        
        }
        
        );
    }
  }

  clear(){
    this.teacherSelected = null;
    this.teacherFormGroup.reset();
  }
}
