import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent implements OnInit {
  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
   }

  ngOnInit(): void {
  }

}
