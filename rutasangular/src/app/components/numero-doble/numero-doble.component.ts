import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  templateUrl: './numero-doble.component.html',
  styleUrls: ['./numero-doble.component.css', './../../app.component.css']
})
export class NumeroDobleComponent {
  public numero!: number;
  public doble!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {}

  goToHome(): void {
    this._router.navigate(["/"])
  }

  redirect(num: number): void {
    //Nos vamos a llamar a nosotros mismos enviando en la ruta el parametro del numero recibido
    this._router.navigate(["/numerodoble", num])
  }

  ngOnInit(): void{
    this._activeRoute.params.subscribe(( parametros: Params) => {
      //Dentro de Params se recuperan los parametros por su nombre con la siguiente sintaxis:  param['PARAMETER VALUE']
      //En este ejemplo, el parametro sera opcional, por lo que vamos a preguntar antes de asignar
      if(parametros['numero'] != null){
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2
      }
    })
  }
}
