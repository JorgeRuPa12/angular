import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches',
  templateUrl: './padre-coches.component.html',
  styleUrl: './padre-coches.component.css'
})
export class PadreCochesComponent {
  public coches: Array<Coche>;

  constructor(){
    this.coches = [
      new Coche("Ford", "Mustang", 200, 10, false),
      new Coche("Toyota", "Supra", 350, 15, true),
      new Coche("lamborghini", "Diablo", 500, 50, true),
    ]
  }
}
