import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creat-employe',
  templateUrl: './creat-employe.component.html',
  styleUrls: ['./creat-employe.component.css']
})
export class CreatEmployeComponent implements OnInit {
  createEmploy: FormGroup;
  submitte = false;
  loading = false;

  constructor(private fb: FormBuilder,
              private _employService: EmployeService,
              private router: Router,
              private toastr: ToastrService) {
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
    this.loading=true;
    //console.log(employ);
    this._employService.addEmploy(employ).then(()=>{
      this.toastr.success('vous avez bien ajouter employé', 'ajouter avec succes',{
        positionClass: 'toast-bottom-right'
      });
      this.loading=false;
      //console.log("vous avez bien ajouter l'employé");
      this.router.navigate(['/liste-employ']);
    }).catch(error =>{
      console.log(error);
      this.loading=false;
      
    })
  
      
    
  
  }
}
