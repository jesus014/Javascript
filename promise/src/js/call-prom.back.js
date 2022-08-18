//exportacion de los modulos que se encuentran en la carpeta js y css.
import{buscarPersonaje as buscarPersonajeCallback} from './js/callbacks'
import {buscarPersonaje}from './js/promesas'
import './styles.css';
//creacion y utilizacion de modulos.

const personajeId= 'naruto';
const personajeId2= 'kakashi';





//buscarPersonaje(personajeId, (err , personaje)=>{
//
//    if(err){
//        console.error('algo salio mal');
//        
//    }else{
//        console.log(personajeId);
//        console.log(personaje);
//    }
//});



//buscarPersonaje(personajeId, (err , personaje)=>{
//    if(err) {return console.error(err);}
//});

//buscarPersonaje(personajeId).then(personaje => {
//    console.log(`enviando al heroe ${personaje.nombre}`);
//
//    buscarPersonaje(personajeId2).then(personaje2 => {
//        console.log(`enviando al heroe ${personaje2.nombre}`);
//    })
//});

//promesas en paralelo. hasta que las peticiones se resuelven

Promise.all([buscarPersonaje(personajeId), buscarPersonaje(personajeId2)])
    //desestructuracion de un arreglo.
    //solo se ejecuta si todas las promesas son validas
.then( ([personaje, personaje2]) =>{
   console.log(`enviando al heroe ${personaje.nombre} y ${personaje2.nombre} `);

    //se utiliza el catch para detectar el fallo
}).catch(err=>{
    alert(err)
});


console.log('fin del programa')