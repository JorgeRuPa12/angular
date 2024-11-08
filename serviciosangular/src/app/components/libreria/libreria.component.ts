import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css', './../../app.component.css'],
  //Debemos inyectar un servicio para poder recuperarlo posteriormente en el constructor
})
export class LibreriaComponent implements OnInit {
  public comics!:  Array<Comic>;
  public mensaje!: string;
  @ViewChild("cajatitulo") cajatitulo!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion!: ElementRef;

  constructor(private _service: ServiceComics) {
    
  }

  ngOnInit(): void {
    this.comics = this._service.getComics()
  }

  crearComic(): void {
    this.comics.push(new Comic(this.cajatitulo.nativeElement.value, this.cajaimagen.nativeElement.value, this.cajadescripcion.nativeElement.value)) 
  }

  seleccionarFavoritoPadre(event: any): void {
    this.mensaje= "Tu comic favorito es " + event.titulo
  }
}
