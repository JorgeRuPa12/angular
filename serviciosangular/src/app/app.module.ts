import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { provideHttpClient } from '@angular/common/http';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceCoches } from './services/service.coche';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { ServicePlantillas } from './services/service.plantillas';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent,
    PersonasapiComponent,
    MenuComponent,
    CochesComponent,
    PlantillasComponent,
    PlantillafuncionmultipleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PersonasstandaloneComponent
  ],
  providers: [ServiceComics, ServicePersonas, ServiceCoches, ServicePlantillas, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
