import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ServiceEmpleado {
    public token!: string | null
    constructor(private _http: HttpClient) {
    }

    getPerfil(): Observable<any> {
        let token = localStorage.getItem('token')
        this.token = token
        let request = "api/empleados/perfilempleado"
        let url = environment.urlEmpleados + request
        let header = new HttpHeaders({'authorization': `Bearer ${this.token}`})
        return this._http.get(url, {headers: header})
    }

    getSubordinados(): Observable<any> {
        let token = localStorage.getItem('token')
        this.token = token
        let request = "api/empleados/subordinados"
        let url = environment.urlEmpleados + request
        let header = new HttpHeaders({'authorization': `Bearer ${this.token}`})
        return this._http.get(url, {headers: header})
    }
}