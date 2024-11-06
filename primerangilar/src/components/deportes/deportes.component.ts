import { Component } from "@angular/core";

@Component ({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrls: ["./../../app/app.component.css", "./deportes.component.css"]
})

export class DeportesComponent {
    public sports: Array<string>;
    public numeros: Array<number>;
    constructor() {
        this.sports = ["Canicas", "Furbo", "Xilofono", "Astigmatismo",  "Dardos"]
        this.numeros = [3, 7, 4, 2, 5, 6, 147]
    }
}