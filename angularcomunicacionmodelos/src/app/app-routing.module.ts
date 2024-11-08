import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { HijoCocheComponent } from './components/hijo-coche/hijo-coche.component';
import { PadreCochesComponent } from './components/padre-coches/padre-coches.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';
 
const routes: Routes = [
  {path: "listaproductos", component: ListaProductosComponent},
  {path: "coches", component: PadreCochesComponent},
  {path: "deportes", component: PadreDeportesComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }