import { Component } from "@angular/core";

//Un component tendra una declaracion de su contenido
@Component ({
    //Debemos de declarar el nombre del component
    //En angular, se suelen llamar mediante guion
    selector: "primer-component",
    //Como no vamos a tener HTML (Vista) como template
    //Vamos a escribir directamente el codigo HTML aquí
    templateUrl: "./primer.component.html",
    styleUrls: ["./primer.component.css"]
})
//Todo component debe ser declarado como una clase
//Dicho nombre de clase se utilizaba dentro de app.module.ts
export class PrimerComponent {
    //Aqui declaramos las variables que deseemos
    //Dichas variables
    public titulo: string;
    public descripcion: string;
    public anyo: number;

    constructor() {
        this.titulo = "Hoy es un miercoles";
        this.descripcion = "Hoy no llueve";
        this.anyo = 2024;
    }
}