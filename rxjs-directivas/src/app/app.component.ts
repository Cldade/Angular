import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  visible = true;
  
  setVisible() {
    this.visible = !this.visible;
  }
  ngOnDestroy(): void {
    this.title = "Componente eliminado"
  }
  ngOnInit(): void {
    this.title = "Componente creado"
  }
  title = 'rxjs-directivas';
}
