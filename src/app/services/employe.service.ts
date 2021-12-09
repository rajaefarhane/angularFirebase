import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private firestore: AngularFirestore) { }

  addEmploy(employ: any): Promise<any> {
    return this.firestore.collection('employs').add(employ);
  }
}
