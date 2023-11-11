import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {

  @ViewChild("miFormulario")
  miFormulario!: NgForm;

  initialSate = {
    proyecto: "",
    horas: 0,
    tecnologias: ""
  }  

  tecnologiasArray: Array<string> = []

  proyectosArray: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    if(this.miFormulario.invalid){
      return;
    }

    this.proyectosArray.push({
      proyecto: this.miFormulario.controls["proyecto"].value,
      horas: this.miFormulario.controls["horas"].value,
      tecnologias: this.tecnologiasArray
    })

    this.miFormulario.resetForm(this.initialSate)
    this.tecnologiasArray = []

    console.log(this.proyectosArray)


  }

  agregarTec(){
    if (this.miFormulario.invalid && this.miFormulario.touched) {
      return;
    }
    this.tecnologiasArray.push(this.miFormulario.controls["tecnologias"].value)

    this.miFormulario.resetForm({
      // proyecto: this.miFormulario.controls["proyecto"].value,
      // horas: this.miFormulario.controls["horas"].value,
      // tecnologias: ""
      ... this.miFormulario.value,
      tecnologias: ""
    })

    console.log(this.tecnologiasArray)
  }

}
