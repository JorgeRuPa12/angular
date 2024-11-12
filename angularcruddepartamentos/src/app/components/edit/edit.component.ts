import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  public departamento!: Departamento;
  @ViewChild("cajaid") cajaid!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef;

  constructor(private _service: ServiceDepartamentos, private _activeRoute: ActivatedRoute, private _router: Router) {
    
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = params["id"];
      this._service.findDepartamento(id).subscribe((response) => {
        this.departamento = response
      })
    })
  }

  editarDepartamento(): void {
    let id = parseInt(this.cajaid.nativeElement.value)
    let nombre = this.cajanombre.nativeElement.value
    let localidad = this.cajalocalidad.nativeElement.value
    let editDepartamento = new Departamento(id, nombre, localidad)
    this._service.updateDepartamento(editDepartamento).subscribe((response) => {
      this._router.navigate(["/"])
    })
  }
}
