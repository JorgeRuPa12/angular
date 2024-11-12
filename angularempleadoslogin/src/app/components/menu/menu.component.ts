import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements DoCheck {
  public sesion!: boolean

  constructor(private _router: Router) {}

  ngDoCheck(): void {
    if(localStorage.getItem('token') == null){
      this.sesion = false
    } else {
      this.sesion = true
    }
  }

  cerrarSesion(): void{
    alert("Has cerrado sesión")
    localStorage.removeItem('token')
    this._router.navigate(["/"])
  }
}
