import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css'
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje!: string;
  //Tendremos un metodo para poder seleccionar un favorito y dibujarlo
  constructor() {
    this.deportes = ["Futbol", "Baloncesto", "Surf", "Skate", "Padel"]
  }

  seleccionarFavorito(event: any): void {
    console.log("Dato: " + event);
    this.mensaje = "Deporte favorito: " + event
  }
}
