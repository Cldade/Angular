import { DarkModePipe } from "./dark-mode.pipe";

describe("DarkModePipe", () => {
    it("debería retornar DarkMode si mando true", () => {
        const pipe = new DarkModePipe();
        expect(pipe.transform(true)).toEqual("bg-dark text-white");
    });

    it("debería retornar LigthMode si mando true", () => {
        const pipe = new DarkModePipe();
        expect(pipe.transform(false)).toEqual("bg-ligth text-dark");
    });
})