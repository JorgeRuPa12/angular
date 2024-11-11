import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class ServicePlantillas {
    constructor(private _http: HttpClient) {}

    getPlantillaFunciones(): Observable<any> {
        let request = "api/plantilla/funciones";
        let url = environment.urlApiPlantilla + request;
        return this._http.get(url);
    }

    getPlantilla(valor: string): Observable<any> {
        let request = "api/Plantilla/PlantillaFuncion/"+valor
        let url = environment.urlApiPlantilla + request
        return this._http.get(url)
    }

    getPlantillaFuncionesM(funciones: Array<string>): Observable<any> {
      let data = "";
      for (var func of funciones) {
        data += "funcion=" + func + "&";
      }
      data = data.substring(0, data.length - 1)

      let request = "api/plantilla/plantillafunciones?" + data
      let url = environment.urlApiPlantilla + request;
      console.log(url);
      
      return this._http.get(url)
    }
}