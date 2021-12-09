import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-creat-employe',
  templateUrl: './creat-employe.component.html',
  styleUrls: ['./creat-employe.component.css']
})
export class CreatEmployeComponent implements OnInit {
  createEmploy: FormGroup;
  submitte = false;

  constructor(private fb: FormBuilder) {
    this.createEmploy = this.fb.group({
      name: ['', Validators.required],
      namee: ['', Validators.required],
      reference: ['', Validators.required],
      salaire: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  addEmploy() {
    this.submitte = true;

    if (this.createEmploy.invalid) {
      return;
    }
 
    const employ: any = {
      name: this.createEmploy.value.name,
      namee: this.createEmploy.value.namee,
      reference: this.createEmploy.value.reference,
      salaire: this.createEmploy.value.salaire,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    console.log(employ);
  }
}
