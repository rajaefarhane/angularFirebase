import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  id: string | null;
  title='ajouter employé';

  constructor(private fb: FormBuilder,
              private _employService: EmployeService,
              private router: Router,
              private toastr: ToastrService,
              private aroute :ActivatedRoute
              ) {
    this.createEmploy = this.fb.group({
      name: ['', Validators.required],
      namee: ['', Validators.required],
      reference: ['', Validators.required],
      salaire: ['', Validators.required]
    })
    this.id=this.aroute.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit(): void {
    this.modifierEm();
  }
  addmodifEmploy() {
    this.submitte = true;

    if (this.createEmploy.invalid) {
      return;
    }
    if(this.id === null){
      this.addEmploy();
    }else{
      this.modifEmploy(this.id);
    }
  }
  modifEmploy(id:string){
    const employ: any = {
      name: this.createEmploy.value.name,
      namee: this.createEmploy.value.namee,
      reference: this.createEmploy.value.reference,
      salaire: this.createEmploy.value.salaire,
      fechaActualizacion: new Date()
    }
    this.loading=true;
    this._employService.actualisEmploy(id,employ).then(()=>{
      this.loading=false;
      this.toastr.info('vous avez bien modifier employé', 'modifier avec succes',{
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/liste-employ']);
    })
  }
  addEmploy(){
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
  modifierEm(){
     this.title = 'modifier employé';
    if(this.id !==null){
      this.loading=true;
      this._employService.getEmploy(this.id).subscribe((data: any) =>{
        this.loading=false;
        console.log(data.payload.data()['name']);
        this.createEmploy.setValue({
          name: data.payload.data()['name'],
          namee: data.payload.data()['namee'],
          reference: data.payload.data()['reference'],
          salaire: data.payload.data()['salaire'],
        })
      })
    }
  }
}
