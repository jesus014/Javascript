import { EstudianteClass } from "./interface/estudiante.interface";
import { genericInterface } from "./interface/genericInterface";
import {Estudiante} from "./classes/Estudiante"

console.log('hola');

const NuevoEstudiante= new EstudianteClass<Estudiante>();

const estudent : Estudiante= {
    facultad:'iteshu',
    Id:1,
    matricula:'17021089',
    carrera: 'isc',
    name:'jesus',

}
NuevoEstudiante.addItem(estudent);
console.log(estudent);

NuevoEstudiante.deleteItem(1);
