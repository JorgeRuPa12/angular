import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-departamento',
  templateUrl: './create-departamento.component.html',
  styleUrl: './create-departamento.component.css'
})
export class CreateDepartamentoComponent {
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(private _service: ServiceDepartamentos, private _router: Router) {}

  insertDepartamento(): void {
    let num = parseInt(this.cajaId.nativeElement.value)
    let nombre = this.cajaNombre.nativeElement.value
    let localidad = this.cajaLocalidad.nativeElement.value
    let newDepartamento = new Departamento(num, nombre, localidad)
    this._service.insertDepartamento(newDepartamento).subscribe((response) => {
      this._router.navigate(["/"]);
    })
  }
}
