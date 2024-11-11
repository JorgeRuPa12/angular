import { Component, ElementRef, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantillas } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantillafuncionmultiple',
  templateUrl: './plantillafuncionmultiple.component.html',
  styleUrl: './plantillafuncionmultiple.component.css'
})
export class PlantillafuncionmultipleComponent {
  public funciones!: Array<string>; 
  public plantillas!: Array<Plantilla>;
  public funcionesSeleccionadas: Array<string>;
  @ViewChild("selectFuncion") selectFuncion!: ElementRef;

  constructor(private _service: ServicePlantillas) {
    this.funcionesSeleccionadas = new Array<string>();
  }

  ngOnInit(): void {
    this._service.getPlantillaFunciones().subscribe((response) => {
      this.funciones = response
      
    })
  }

  buscarPlantilla(): void {
    
    let aux = new Array<string>();

    for (var option of this.selectFuncion.nativeElement.options) {
      if (option.selected == true){
        aux.push(option.value);
      }
    }

    this.funcionesSeleccionadas = aux;
    

    this._service.getPlantillaFuncionesM(this.funcionesSeleccionadas).subscribe((response) => {
      console.log(response);
      
      this.plantillas = response
    })
  }
}
