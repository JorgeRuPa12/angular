import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabla',
  templateUrl: './menu-tabla.component.html',
  styleUrl: './menu-tabla.component.css'
})
export class MenuTablaComponent {
  public numeros: Array<number>;

  constructor() {
    this.numeros = [2, 5, 7, 9]
  }
}
