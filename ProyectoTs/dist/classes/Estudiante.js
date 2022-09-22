"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const Humano_1 = require("./Humano");
class Estudiante extends Humano_1.Humano {
    /**
 *
 */
    constructor(carrera, facultad, Id) {
        super();
        this.carrera = carrera;
        this.facultad = facultad;
        this.Id = Id;
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.carrera}`);
    }
}
exports.Estudiante = Estudiante;
