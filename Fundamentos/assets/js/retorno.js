//funciones y valores de retorno el las diferentes funciones que se pueden realizar.


function crearPersona(nombre, apellido){
    return{
        nombre:nombre,
        apellido:apellido
    }
}

//

const persona =crearPersona('jesus','santiago');

console.log(persona);//

//se puuede ir simplificando la funcion principal.
// los valores que se devuelven son los mismos que las variables.

function crearPersona(nombre, apellido){
    return{ nombre, apellido}
}
//funcion de flecha

const crearPersona= (nombre, apellido) =>{
    return{ nombre, apellido}
}

//funcion de flecha simplificada
const crearPersona= (nombre, apellido) => ({nombre, apellido});

const persona2 =crearPersona('jesus','santiago');
console.log(persona2);


//valores de argumentos que se envian
function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(10,true,false,'hola');

const imprimeArgumentos2=(...args)=>{
    return args;
}


const [casado,vivo,nombre,saludo] = imprimeArgumentos2(10,true,false,'jesus','saludo');
console.log({casado,vivo,nombre,saludo});



const personajes = {
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

const imprimePropiedades=({nombre,codeName,vivo,edad =20,amigos}) => {
    console.log(personajes.nombre);
}

imprimePropiedades(itachi);