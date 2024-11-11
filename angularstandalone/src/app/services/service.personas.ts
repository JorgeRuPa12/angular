import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas {
    constructor(private _http:HttpClient){}

    getPersonas(): Observable<any> {
        let urlApiPersonas = 
        "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        //TENEMOS DOS FORMAS DE REALIZAR LA FUNCIONALIDAD DE DEVOLUCION DE 
        //DATOS
        //1) IGUAL QUE EN VUE, CREANDO UNA PROMESA POR ENCIMA DE ESTE METODO
        //2) DEVOLVER DIRECTAMENTE LA PETICION PARA QUE SEA EL COMPONENT
        //QUIEN SE SUBSCRIBA
        return this._http.get(urlApiPersonas);
    }

    getPersonasPromesa(): Promise<any> {
        let urlApiPersonas = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas"
        let promise = new Promise((resolve) => {
          this._http.get(urlApiPersonas).subscribe((response) => {
            resolve(response)
          })
        })
        return promise;
      }
}