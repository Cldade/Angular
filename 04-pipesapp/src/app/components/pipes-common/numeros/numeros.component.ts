import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  calificacion: number = 7.9164984656348;
  porcentaje: number = 0.485;
  saldo: number = 12000;

  constructor() { }

  ngOnInit(): void {
  }

}
