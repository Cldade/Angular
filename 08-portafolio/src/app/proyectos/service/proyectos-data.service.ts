import { Injectable } from '@angular/core';
import {proyectos} from "../../shared/data/proyectos.data";

@Injectable({
  providedIn: 'root'
})
export class ProyectosDataService {
  private data = proyectos
  constructor() { }

  get dataProyectos(){
    return this.data;
  }

  getProyecto(nombre: string){
    return this.data.find( proyecto => proyecto.nombre === nombre);
  }
}
