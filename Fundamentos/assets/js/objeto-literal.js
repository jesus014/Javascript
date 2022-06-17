
let personajes = {
    nombre: 'itachi',
    codeName: 'itachi Dios',
    vivo: true,
    edad:22,
    coords: {
        lat:49.21212,
        lng: -99.01212
    },
    
    amigos:['sasuke','naruto','gara'],

    direccion:{
        zip:'1212,312313',
        ubicacion:'aldea de la hoja'
    },
    ultimaAparicion:'con sasuke'
}

console.log(personajes);

//formas de acceder a personajes.

console.log('nombre', personajes['nombre']);
console.log('edad', personajes.edad);
console.log('cors', personajes.coords.lat);


let cantidadAmigos = (personajes.amigos.length);


console.log('amigos', personajes.amigos.length);
console.log('amigos', personajes.amigos [personajes.amigos.length-1]);


const x ='vivo';
console.log('vivo', personajes[x]);

//forma de alterar el objecto creado llamado personajes.
delete personajes.edad;
console.log(personajes);


personajes.casado=true;
const entriesPares=Object.entries(personajes);
console.log(entriesPares);

//bloqueo para futuras alteraciones de modelo personajes
Object.freeze(personajes);

personajes.dinero=1212121;

//se puede seguir afectando a los otros nodos mas inferiores.
personajes.direccion.ubicacion='mexico';
console.log(personajes);

//se acceden a las propiedades.
const propiedades = Object.getOwnPropertyNames(personajes);
const valores = Object.values(personajes);
console.log(valores);