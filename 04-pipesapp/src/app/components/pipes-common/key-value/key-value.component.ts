import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.css']
})
export class KeyValueComponent implements OnInit {

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
