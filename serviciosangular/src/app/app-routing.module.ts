import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

const routes: Routes = [
  {path: "", component: PersonasapiComponent},
  {path: "libreria", component: LibreriaComponent},
  {path: "coches", component: CochesComponent},
  {path: "funciones", component: PlantillasComponent},
  {path: "funcionesmultiples", component: PlantillafuncionmultipleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
