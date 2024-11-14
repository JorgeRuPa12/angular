import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateAlumnoComponent } from './components/create-alumno/create-alumno.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "create", component: CreateAlumnoComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
