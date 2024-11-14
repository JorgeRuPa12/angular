import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { Alumno } from "../models/alumno";

@Injectable()
export class ServiceAlumno {
    
    constructor(private _http: HttpClient) {}
    getAlumnos(): Observable<any> {
        let token = localStorage.getItem('token')
        let request = "api/alumnos/alumnostoken"
        let url = environment.urlAlumnos + request
        let header = new HttpHeaders();
        header = header.set("Authorization", "Bearer " + token);
        return this._http.get(url, {headers: header})
    }

    getCursos(): Observable<any> {
        let token = localStorage.getItem('token')
        let request = "api/alumnos/cursostoken"
        let url = environment.urlAlumnos + request
        let header = new HttpHeaders();
        header = header.set("Authorization", "Bearer " + token);
        return this._http.get(url, {headers: header})
    }

    logIn(user: User): Observable<any> {
        let userJSON = JSON.stringify(user)
        let request = "api/auth/login"
        let url = environment.urlAlumnos + request
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");
        return this._http.post(url, userJSON, {headers: header})
    }

    insertAlumno(alumno: Alumno): Observable<any> {
        let token = localStorage.getItem('token')
        let alumnoJSON = JSON.stringify(alumno)
        let request = "api/alumnos/insertalumnotoken"
        let url = environment.urlAlumnos + request
        let header = new HttpHeaders();
        header = header.set("Authorization", "Bearer " + token);
        return this._http.post(url, alumno, {headers: header})
    }
}