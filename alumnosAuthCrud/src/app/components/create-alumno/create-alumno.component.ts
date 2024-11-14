import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceAlumno } from '../../services/alumno.service';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrl: './create-alumno.component.css'
})
export class CreateAlumnoComponent implements OnInit {
  public cursos!: Array<number>;
  @ViewChild("nombre") nombre!: ElementRef;
  @ViewChild("apellidos") apellidos!: ElementRef;
  @ViewChild("imagen") imagen!: ElementRef;
  @ViewChild("activo") activo!: ElementRef;
  @ViewChild("selectCurso") selectCurso!: ElementRef;
  public activo01!: number;

  constructor(private _service: ServiceAlumno, private _router: Router) {}

  ngOnInit(): void {
    this._service.getCursos().subscribe(response => {
      this.cursos = response
      
    })
  }

  crearAlumno(): void {
    if(this.activo.nativeElement.value == 'on')  {
      this.activo01 = 1
    }else {
      this.activo01 = 0
    }
    
    let alumno = new Alumno(0, this.nombre.nativeElement.value, this.apellidos.nativeElement.value, this.imagen.nativeElement.value, this.activo01, this.selectCurso.nativeElement.value)
    console.log(alumno);
    
    this._service.insertAlumno(alumno).subscribe(response => {
      this._router.navigate(['/'])
    })
  }
}
