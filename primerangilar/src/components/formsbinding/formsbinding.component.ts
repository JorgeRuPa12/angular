import { Component, OnInit } from "@angular/core";

@Component ({
    selector: "app-forms-binding",
    templateUrl: "./formsbinding.component.html",
    styleUrls: ["./../../app/app.component.css"]
})

export class FormsBindingComponent implements OnInit {
    public user: any;
    public mensaje: string;

    constructor() {
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }

    ngOnInit(): void {
        console.log("Iniciando Componente")
    }

    recibirDatos(): void {
        this.mensaje = "Datos Recibidos"
    }
}