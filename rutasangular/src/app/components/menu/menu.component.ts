import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void{
    this._activatedRoute.params.subscribe(( parametros: Params) => {

    })
  }
}
