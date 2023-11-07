import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  persona = {
    nombre: 'Claudia',
    edad: 24,
    direccion: {
      calle: 'Calle 1',
      casa: 20
    },
    ocupacion: 'Estudiante'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
