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
employs:any[]=[];
items: Observable<any[]>;
  constructor(private _employsServices:EmployeService, firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
    //this.employs= firestore.collection('employs').valueChanges();

   }

  ngOnInit(): void {
    this.getEmploys();
  }
  getEmploys() {
  this._employsServices.getEmploys().subscribe((data: any)=>{
    //console.log(data);
    this.employs = [];
    data.forEach((element: any) => {
      //console.log(element.payload.doc.data());//pour afficher les donnés
      //console.log(element.payload.doc.id);//pour afficher id 
      this.employs.push({
       id: element.payload.doc.id,
      ...element.payload.doc.data()
      })
    });
    console.log(this.employs);
  });
  
  }
}
