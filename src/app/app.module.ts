import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//models

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import 'rxjs';


//components

import { AppComponent } from './app.component';
import { ListeEmployeComponent } from './components/liste-employe/liste-employe.component';
import { CreatEmployeComponent } from './components/creat-employe/creat-employe.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ListeEmployeComponent,
    CreatEmployeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
