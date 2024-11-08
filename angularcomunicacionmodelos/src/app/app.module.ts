import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { HijoCocheComponent } from './components/hijo-coche/hijo-coche.component';
import { PadreCochesComponent } from './components/padre-coches/padre-coches.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';
import { HijoDeportesComponent } from './components/hijo-deportes/hijo-deportes.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    MenuComponent,
    HijoCocheComponent,
    PadreCochesComponent,
    PadreDeportesComponent,
    HijoDeportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }