import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEmployeComponent } from './components/liste-employe/liste-employe.component';
import { CreatEmployeComponent } from './components/creat-employe/creat-employe.component';

const routes: Routes = [
  {path:'',redirectTo:'liste-employ',pathMatch:'full'},
  { path:'liste-employ', component:ListeEmployeComponent },
  { path:'creat-employ', component:CreatEmployeComponent },
  { path: 'modifierEmploys/:id', component: CreatEmployeComponent},
  {path:'**',redirectTo:'liste-employ',pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
