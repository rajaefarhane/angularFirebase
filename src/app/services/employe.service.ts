import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private firestore: AngularFirestore) { }

  addEmploy(employ: any): Promise<any> {
    return this.firestore.collection('employs').add(employ);
  }
  getEmploys(): Observable<any> {
    return this.firestore.collection('employs', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
    //return this.firestore.collection('employs', ref => ref.orderBy('fechaCreacion', 'desc')).snapshotChanges();
  }
}
