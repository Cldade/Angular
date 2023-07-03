import { Component } from '@angular/core';

@Component({
    selector: "app-contador",
    templateUrl: "./counter.component.html",
    styles: [`
        h1 {
            color:red;
            font-size: 3rem;
        }
    `]
})
export class CounterComponent{
    contador:number = 0

    handleCount(value:number){
        console.log(value)
        this.contador = value
    }
}