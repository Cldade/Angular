import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { Component } from '@angular/core';

describe("CounterComponent", () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ CounterComponent ]
        }).compileComponents();
      });

    it("Se debe crear el componente Counter", () => {
      const fixture = TestBed.createComponent(CounterComponent)
      const app = fixture.componentInstance
      expect(app).toBeTruthy()
    })

    it("debe crear el texto Contador: 0", () => {
      const fixture = TestBed.createComponent(CounterComponent)
      fixture.detectChanges()
      const compiled:HTMLElement = fixture.nativeElement
      expect(compiled.querySelector("h1")?.textContent).toEqual("Contador: 0");
    })

    it("Valor inicial del contador es 0", () => {
        const counter = new CounterComponent
        expect(counter.contador).toBe(0)
    })

  

})
  
describe("Integration Testing", () => {
  let fixture: ComponentFixture<CounterComponent>;
  let component: CounterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterComponent, ButtonAddComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it("evento click add", () => {
    const compiled:HTMLElement = fixture.nativeElement
    const counterValue = compiled.querySelector("h1")!
    const btnAdd:HTMLElement = fixture.debugElement.nativeElement.querySelector("#id_add")
    btnAdd.click()
    fixture.detectChanges()
    expect(counterValue.textContent).toEqual("Contador: 1")
  })  

  
})