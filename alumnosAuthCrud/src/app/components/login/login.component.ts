import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceAlumno } from '../../services/alumno.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  @ViewChild("username") username!: ElementRef;
  @ViewChild("password") password!: ElementRef;
  public usuario!: User;

  constructor(private _service: ServiceAlumno, private _router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('token') !== null){
      
      this._router.navigate(["/"])
    }
  }

  iniciarSesion(): void {
    this.usuario = new User(this.username.nativeElement.value, this.password.nativeElement.value)
    this._service.logIn(this.usuario).subscribe(response => {
      localStorage.setItem('token', response.response);
      this._router.navigate(["/"])
    })
  }
}
