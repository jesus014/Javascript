import { Humano } from "./Humano";

class Estudiante extends Humano{
    facultad:string;
    carrera: string;
        /**
     *
     */
    constructor(carrera:string,facultad:string, Id:number) {
        super();
        this.carrera=carrera;
        this.facultad=facultad;
        this.Id=Id;
        this.showInfo();
        
    }
    showInfo?() {
        console.log(`${this.carrera}`)
    }
}


export {
    Estudiante
}
