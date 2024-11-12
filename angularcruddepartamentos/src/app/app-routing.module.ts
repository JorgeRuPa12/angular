import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateDepartamentoComponent } from './components/create-departamento/create-departamento.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "create", component: CreateDepartamentoComponent},
  {path: "details/:id/:nombre/:localidad", component: DetailsComponent},
  {path: "edit/:id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
