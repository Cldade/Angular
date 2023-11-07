import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n-select.component.html',
  styleUrls: ['./i18n-select.component.css']
})
export class I18nSelectComponent implements OnInit {

  genero = "f";

  mensajes = {
    m: "Buenvenido Usuario",
    f: "Bienvenida Usuaria",
    other: "Bienvenid@ Usuari@"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
