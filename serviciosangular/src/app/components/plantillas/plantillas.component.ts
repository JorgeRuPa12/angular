import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrl: './plantillas.component.css'
})
export class PlantillasComponent implements OnInit {
  public funciones!: Array<string>; 
  public plantillas!: Array<Plantilla>;
  @ViewChild("selectFuncion") selectFuncion!: ElementRef;

  constructor(private _service: ServicePlantillas) {}

  ngOnInit(): void {
    this._service.getPlantillaFunciones().subscribe((response) => {
      this.funciones = response
      
    })
  }

  buscarPlantilla(): void {
    console.log(this.selectFuncion.nativeElement.value);
    
    this._service.getPlantilla(this.selectFuncion.nativeElement.value).subscribe((response) => {
      this.plantillas = response
    })
  }
}
