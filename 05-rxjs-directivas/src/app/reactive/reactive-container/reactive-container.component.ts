import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map, take, fromEvent } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit, OnDestroy {
  
  subscriptor: Subscription | undefined

  x: number = 0;
  y: number = 0;

  ngOnDestroy(): void {
      this.subscriptor?.unsubscribe();
  }

  ngOnInit(): void {
      const obs = fromEvent(document.querySelector("#area")!, "mousemove");
      this.subscriptor = obs.subscribe((data: any) => {
          // console.log("evento")
          this.x = data.clientX;
          this.y = data.clientY;
      });
  }
  
  // numero: number = 0

  // miObservable = new Observable<number>(() => {
  //   setInterval(() => {
  //     this.numero++
  //   }, 3000)
  // })

  // miIntervalo: Observable<number> = interval(1000).pipe(
  //                                                       map(value => value +1),
  //                                                       filter((value) => value % 2 === 0), //solo mandamos los números pares
  //                                                       take(5) //solo se ejecuta 4 veces
  //                                                     ) 

  // miSubscription: Subscription | undefined;
  // constructor() {
  //   // let numero: number = 0

  //   // const miObservable = new Observable<number>((observer) => {
  //   //   setInterval(() => {
  //   //     //console.log(numero)
  //   //     numero++
  //   //     observer.next(numero)
  //   //   }, 1000)
  //   // });

  //   // // miObservable.subscribe(
  //   // //   (result) => {
  //   // //     console.log(result)
  //   // //   }
  //   // // );

  //   // miObservable.subscribe({
  //   //   next: (result) => {
  //   //     console.log(result)
  //   //   },
  //   //   error: (error) => {
  //   //     console.log(error)
  //   //   }
  //   // });

  // }

  // ngOnInit(): void {
  //   // //.pipe() -> permite transformar el observable
  //   // this.miIntervalo
  //   //   .pipe(
  //   //     take(4), //solo se ejecuta 4 veces
  //   //     filter((value) => value % 2 === 0) //solo mandamos los números pares
  //   //   ) 
  //   //   .subscribe( value => console.log(value)) 
  //   this.miSubscription = this.miIntervalo
  //                                       .subscribe({
  //                                         next: value => console.log(value),
  //                                         complete: () => console.log('Completado')
  //                                       }) 
    
      
  // }

  // ngOnDestroy(): void {
  //   this.miSubscription!.unsubscribe()
  //   console.log('Componente destruido')
  // }

}
