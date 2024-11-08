import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-deportes',
  templateUrl: './hijo-deportes.component.html',
  styleUrl: './hijo-deportes.component.css'
})
export class HijoDeportesComponent {
  @Input() sport!: string

  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  seleccionarFavoritoHijo(): void {
    //Realizamos la llamada al metodo padre
    this.seleccionarFavoritoPadre.emit(this.sport)
  }
}
