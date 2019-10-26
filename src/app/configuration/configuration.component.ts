import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  configurationFormGroup: FormGroup;
  time = { hour: 13, minute: 30 };
  finalTime = { hour: 13, minute: 30 };

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    var configuration = {
      controlNumber: 'Ciento dos',
      date: new Date(2019, 8, 30),
      startHour: { hour: 15, minute: 30 },
      finalHour: { hour: 13, minute: 30 }
    }
    this.configurationFormGroup = this._formBuilder.group({
      controlNumber: [configuration.controlNumber, Validators.required],
      date: new FormControl({ value: configuration.date, disabled: true }, Validators.required),
      startHour: [configuration.startHour, Validators.required],
      finalHour: [configuration.finalHour, Validators.required]
    });

  }

  saveChanges(event) {

    let configObject = {
      controlNumber: this.configurationFormGroup.value.controlNumber,
      date: this.configurationFormGroup.get('date').value,
      startHour: this.configurationFormGroup.value.startHour,
      finalHour: this.configurationFormGroup.value.finalHour
    }

    localStorage.setItem("configuration", JSON.stringify(configObject));
    
  }
}
