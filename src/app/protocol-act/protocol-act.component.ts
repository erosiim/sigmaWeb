import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from '../navbar-service.service';
import { TeacherRequestService } from '../services/teacher-request.service';
import * as jsPDF from 'jspdf';
import { Teacher } from '../models/teacher';
import { MatStepper } from '@angular/material/stepper';
import html2canvas from 'html2canvas';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol-act.component.html',
  styleUrls: ['./protocol-act.component.css', './protocol-act-theme.scss']
})
export class ProtocolActComponent implements OnInit {

  selectedTeachers = [{
    role: 'Presidente',
    id: null,
    teacher: null
  }, {
    role: 'Secretario',
    id: null,
    teacher: null
  }, {
    role: 'Vocal',
    id: null,
    teacher: null
  }];
  selectedRole = null;
  teachers: Teacher[] = [];
  selectedTeacher: Teacher;
  isLinear = false;
  studentFormGroup: FormGroup;
  receptionalWorkFormGroup: FormGroup;
  presidentFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  carrers = [''];
  controlName = 'CIENTO CINCUENTA';

  constructor(private _formBuilder: FormBuilder, public nav: NavbarService, private teacherService: TeacherRequestService) { }

  ngOnInit() {
    this.nav.show();
    this.nav.isAdmin();
    this.teacherService.getTeachers().subscribe(
      data => {
        this.teachers = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );

    this.studentFormGroup = this._formBuilder.group({
      namesCtrl: ['', Validators.required],
      firstLastNameCtrl: ['', Validators.required],
      secondLastNameCtrl: ['', Validators.required],
      careerCtrl: ['', Validators.required]
    });
    this.receptionalWorkFormGroup = this._formBuilder.group({
      titleCtrl: ['', Validators.required],
      typeCtrl: ['', Validators.required]
    });

  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  getName(teacher){
    console.log(teacher.role);
    return teacher.role;
  }
  setTeacherToRole() {
    console.log(this.selectedTeacher);
    let updateIndex = -1;
    switch (this.selectedRole) {
      case 'PRESIDENTE':
        updateIndex = 0;
        break;
      case 'SECRETARIO':
        updateIndex = 1;
        break;
      case 'VOCAL':
        updateIndex = 2;
        break;
      default:
        return;
    }




  }
  selectTeacher(teacher) {
    this.selectedTeacher = teacher;
    console.log(this.selectedTeacher);
  }
  public generatePDF() {
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function (element, rederer) {
        return true;
      }
    };

    let content = document.getElementById('contentToConvert');
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers,
    });

    doc.save('prueba.pdf');


    /** codigo de ejemplo
    let doc = new jsPDF('p', 'mm', 'legal');
    doc.addHTML(elementToPrint, function() {
      doc.save('protocol-act.pdf'); 
    });*/
  }

  public sendForm(event) {
    let presidentFormObj = this.presidentFormGroup.value;
    let studentFormObj = this.studentFormGroup.value;
    let receptionalWorkFormObj = this.receptionalWorkFormGroup.value;
    let data = {
      studet: {

        name: studentFormObj.namesCtrl,
        last_name_phater: studentFormObj.firstLastNameCtrl,
        last_name_mother: studentFormObj.secondLastNameCtrl,
        career: studentFormObj.careerCtrl
      },
      teachers: this.selectedTeachers,
      receptionalWork: {
        title: receptionalWorkFormObj.titleCtrl,
        type: receptionalWorkFormObj.typeCtrl
      }
    };

    var config = JSON.parse(localStorage.getItem('configuration'));

    console.log(data, config);
    //this.download();
    this.generatePDF();
  }

  private download() {
    var lMargin = 50; //left margin in mm
    var rMargin = 0; //right margin in mm
    var pdfInMM = 210;  // width of A4 in mm
    var doc = new jsPDF('p', 'mm', 'legal');
    doc.setFont('arial');
    doc.setFontSize(11);
    var paragraph = 'NÚMERO.- CIENTO CINCUENTA EN LA CIUDAD DE IXTACZOQUITLÁN, ESTADO DE VERACRUZ LLAVE, SIENDO LAS 10:00 HORAS DEL DÍA 29 DE MARZO DEL AÑO DOS MIL DIECINUEVE, SE REÚNEN EN EL AUDITORIO DE LA FACULTAD DE CONTADURÍA Y ADMINISTRACIÓN DE ESTA CIUDAD, DEPENDIENTE DE LA UNIVERSIDAD VERACRUZANA, LOS ACADÉMICOS MTRA. ALEJANDRA RAMIREZ ZAVALETA  M.A.F.O. CLAUDIA GARCIA SANTOS, DR. OSCAR YAHEVH CARRERA MORA, DESIGNADOS PARA INTEGRAR EL JURADO DEL EXAMEN PROFESIONAL DE LA CARRERA DE: LICENCIADO EN GESTION Y DIRECCION DE NEGOCIOS  DEL (LA) ASPIRANTE A ESTE TÍTULO, CIUDADANO (A): ALAN CAMARILLO CARRASCO FUNGIENDO COMO PRESIDENTE, SECRETARIO Y VOCAL MTRA. ALEJANDRA RAMIREZ ZAVALETA  M.A.F.O. CLAUDIA GARCIA SANTOS, DR. OSCAR YAHEVH CARRERA MORA  RESPECTIVAMENTE, SE DIO INICIO AL ACTO DEL EXAMEN DE LA EXPERIENCIA EDUCATIVA EXPERIENCIA RECEPCIONAL PRESENTANDO SU MONOGRAFÍA INTITULADA: “EL RECURSO ANTE LAS NUEVAS TECNOLOGIAS USADAS EN EL NEGOCIO.“ CON LA RÉPLICA DE LOS SINODALES QUIENES LO INTERROGARON CADA UNO DE ELLOS Y RECOGIDA LA VOTACIÓN, EL SUSTENTANTE RESULTÓ APROBADO HABIENDO CUMPLIDO CON LOS REQUISITOS ESTABLECIDOS POR LA LEGISLACIÓN UNIVERSITARIA Y ESTE JURADO HACE LA DECLARATORIA DEL RESULTADO DEL EXAMEN PROFESIONAL, SE LEVANTA LA PRESENTE ACTA Y SE ENTREGA UNA AL SUSTENTANTE, A CONTINUACIÓN EL PRESIDENTE DEL JURADO PROCEDIÓ A TOMAR LA PROTESTA EN LOS SIGUIENTES TÉRMINOS: EL JURADO AQUÍ REUNIDO LO(A) HA CONSIDERADO DIGNO DE RECIBIR EL TÍTULO DE LICENCIADO EN GESTION Y DIRECCION DE NEGOCIOS QUE LO (A) HABILITARÁ PARA DESEMPEÑAR LA IMPORTANTE FUNCIÓN SOCIAL QUE ABARCA LA CARRERA EN EL EJERCICIO DE LA PROFESIÓN DE TAN ALTA RESPONSABILIDAD, TENGA USTED PRESENTE ANTE TODO QUE  POR EL HECHO DE SERLO SE OBLIGA A INFORMAR DEBIDAMENTE, CON TODA VERDAD Y HONRADEZ, EN EL CASO QUE SEA LLAMADO A DESEMPEÑAR UN TRABAJO PROFESIONAL. NO OLVIDE USTED QUE QUIEN PONE EN SUS MANOS EL ESTUDIO DE CUALQUIER CASO, CONFÍA NO SOLO EN SU SABER SINO TAMBIÉN EN SU LEALTAD Y DISCRECIÓN, ESTIMANDO QUE SERÁ INCAPAZ DE ANTEPONER A SU INTERÉS LEGÍTIMO, EL SUYO PERSONAL O SUS PASIONES. RECORDADOS ASÍ SUS PRINCIPALES DEBERES QUE LE IMPONE EL TÍTULO QUE RECIBIRÁ USTED EN BREVE, SOLAMENTE LE FALTA PROMETER SU DEBIDO CUMPLIMIENTO, CIUDADANO (A) ALAN  CAMARILLO CARRASCO ¿PROTESTÁIS QUE EN EL EJERCICIO DE VUESTRA PROFESIÓN, PROCEDERÉIS SIEMPRE CON ESTRICTO APEGO A LAS NORMAS ÉTICAS Y PROCURAREIS DEJAR BIEN SENTADO EL PRESTIGIO DE LA FACULTAD DE CONTADURÍA Y ADMINISTRACIÓN DE IXTACZOQUITLÁN, VERACRUZ, QUE ESTÁ SEGURA DE VUESTRA PREPARACIÓN PROFESIONAL Y CONFÍA EN VUESTRA MORALIDAD Y HONRADEZ? EL INTERPELADO CONTESTO: SI  PROTESTO, Y EL PRESIDENTE DEL JURADO REPLICÓ: “SI NO ACTUAREIS ASÍ, QUE LA UNIVERSIDAD VERACRUZANA Y LA SOCIEDAD EN GENERAL OS LO DEMANDEN”, CON LO QUE SE DIO POR TERMINADO EL ACTO PROTOCOLARIO SIENDO LAS 11:00 HORAS DEL DÍA DE LA FECHA.';
    var lines = doc.splitTextToSize(paragraph, (pdfInMM - lMargin - rMargin));
    doc.text(lMargin, 20, lines, { maxWidth: 125, align: 'justify' });
    doc.save('Generated.pdf');
  }

}
