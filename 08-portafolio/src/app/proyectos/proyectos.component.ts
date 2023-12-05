import { Component } from '@angular/core';
import {ProyectosDataService} from "./service/proyectos-data.service";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(private proyectoDataService: ProyectosDataService) {
  }

  get data() {
    return this.proyectoDataService.dataProyectos;
  }

  getURI(uri: string){
    return encodeURI(uri);
  }
}
