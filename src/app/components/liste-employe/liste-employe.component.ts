import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';
import { EmployeService } from 'src/app/services/employe.service';


@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent implements OnInit {
employs:Observable<any[]>;
items: Observable<any[]>;
  constructor(private _employsServices:EmployeService, firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
    this.employs= firestore.collection('employs').valueChanges();

   }

  ngOnInit(): void {
    this.getEmpleados;
  }
  getEmpleados() {
  
  }
}
