import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAlumnoComponent } from './components/create-alumno/create-alumno.component';
import { provideHttpClient } from '@angular/common/http';
import { ServiceAlumno } from './services/alumno.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    CreateAlumnoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(), ServiceAlumno],
  bootstrap: [AppComponent]
})
export class AppModule { }
