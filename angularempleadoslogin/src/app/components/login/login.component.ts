import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { ServiceLogin } from '../../services/login.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public usuario!: User;
  public token!: string;
  @ViewChild("username") username!: ElementRef;
  @ViewChild("password") password!: ElementRef;

  constructor(private _service: ServiceLogin, private _router: Router) {}

  loginUser(): void {
    this.usuario = new User(this.username.nativeElement.value, this.password.nativeElement.value)
    this._service.login(this.usuario).subscribe(response => {
      this.token = response.response
      localStorage.setItem('token', this.token);
      this._router.navigate(["/"])
    })
  }
}
