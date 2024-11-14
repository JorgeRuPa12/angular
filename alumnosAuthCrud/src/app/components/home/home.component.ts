import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumno } from '../../services/alumno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public alumnos!: Array<Alumno>;

  constructor(private _service: ServiceAlumno) {
    
  }

  ngOnInit(): void {
    this._service.getAlumnos().subscribe((response) => {
      this.alumnos = response
      
    })
  }
}
