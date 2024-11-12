import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceLogin {
    constructor(private _http: HttpClient) {}

    login(usuario: User): Observable<any> {
        let userJSON = JSON.stringify(usuario)
        let request = "auth/login"
        let url = environment.urlEmpleados + request
        let header = new HttpHeaders().set("Content-type", "application/json")
        return this._http.post(url, userJSON, {headers: header})
    }
}