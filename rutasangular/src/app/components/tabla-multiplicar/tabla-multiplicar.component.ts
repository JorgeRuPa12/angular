import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar',
  templateUrl: './tabla-multiplicar.component.html',
  styleUrl: './tabla-multiplicar.component.css'
})
export class TablaMultiplicarComponent implements OnInit {
  public resultados: Array<{operacion:string, resultado:number }>;
  public numero!: number;

  constructor(private _activeRoute: ActivatedRoute) {
    this.resultados = []
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( parametros: Params) => {
      if(parametros['numero'] != null){
        this.numero = parseInt(parametros['numero'])
        this.generarTabla()
      }
    })
  }

  generarTabla(): void{
    this.resultados = []
    let numero = this.numero
    for (let i = 1; i <= 10; i++) {
      let operacion = numero + "*" + i
      let resultado = numero*i
      this.resultados.push({
        operacion: operacion,
        resultado: resultado
      })
    }
  }
  
}
