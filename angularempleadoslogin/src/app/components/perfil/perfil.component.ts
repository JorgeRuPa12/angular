import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleado } from '../../services/empleado.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  public empleado!: Empleado;

  constructor(private _service: ServiceEmpleado) {}

  ngOnInit(): void {
    this._service.getPerfil().subscribe(response => {
      this.empleado = response
    })
  }
}
