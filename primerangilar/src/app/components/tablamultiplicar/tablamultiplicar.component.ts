import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrls: ['./tablamultiplicar.component.css', './../../app.component.css']
})

export class TablamultiplicarComponent {
    public numero: number; 
    public resultados: Array<{operacion:string, resultado:number }>;
    @ViewChild("cajanumero") cajaNumeroRef!: ElementRef;

    constructor() {
      this.numero = 0
      this.resultados = [];
    }

    generarTabla(): void {
      let num = parseInt(this.cajaNumeroRef.nativeElement.value);

      this.resultados = [];
      
      for (let i = 1; i <= 10; i++) {
        let operacion = num + "*" + i
        let resultado = num*i
        this.resultados.push({
          operacion: operacion,
          resultado: resultado
        })
      }
    }
}
