import { Component, ViewChild, ElementRef } from "@angular/core";

@Component ({
    selector: "app-sumar-numeros",
    templateUrl: "./sumarnumeos.component.html",
    styleUrls: ["./../../app/app.component.css"]
})

export class SumarNumerosComponent {
    //Declaramos variables para haver referencia a las cajas
    //<input/> mediante su id de angular
    @ViewChild("cajanumero1") cajaNumero1Ref!: ElementRef;
    
    @ViewChild("cajanumero2") cajaNumero2Ref!: ElementRef;

    public suma!: number;
    /*
        En angular todas las propiedades deben ser instanciadas/iniciadas
        los objetos de referencia debemos debemos utilizar una sintaxis
        mediante su constructor (new) e indicar el valor por defecto que 
        deseamos que tengan las cajas
    */
    // constructor() {
    //     this.suma = 0;
    //     this.cajaNumero1Ref = new ElementRef(0)
    //     this.cajaNumero2Ref = new ElementRef(0)
    // }

    sumarNumeros(): void {
        let num1 = this.cajaNumero1Ref.nativeElement.value;
        let num2 = this.cajaNumero2Ref.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2)
    }
}