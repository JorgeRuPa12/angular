import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  public departamento!: Departamento;

  constructor(private _activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      let id = parseInt(params["id"]);
      let nombre = params["nombre"];
      let localidad = params["localidad"];
      this.departamento = new Departamento(id, nombre, localidad);
    })
  }
}
