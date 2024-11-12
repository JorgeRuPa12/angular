import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleado } from '../../services/empleado.service';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css'
})
export class SubordinadosComponent implements OnInit {
  public subordinados!: Array<Empleado>;

  constructor(private _service: ServiceEmpleado) {}

  ngOnInit(): void {
    this._service.getSubordinados().subscribe(response => {
      this.subordinados = response
    })
  }
}
