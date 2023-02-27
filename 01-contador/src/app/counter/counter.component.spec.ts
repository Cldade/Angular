import { CounterComponent } from './counter.component';

describe("CounterComponent", () => {

    it("Valor inicial del contador es 0", () => {
        const counter = new CounterComponent
        expect(counter.contador).toBe(0)
    })
})