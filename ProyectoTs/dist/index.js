"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const estudiante_interface_1 = require("./interface/estudiante.interface");
console.log('hola');
const NuevoEstudiante = new estudiante_interface_1.EstudianteClass();
const estudent = {
    facultad: 'iteshu',
    Id: 1,
    matricula: '17021089',
    carrera: 'isc',
    name: 'jesus',
};
NuevoEstudiante.addItem(estudent);
console.log(estudent);
NuevoEstudiante.deleteItem(1);
