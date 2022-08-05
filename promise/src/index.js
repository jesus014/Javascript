//exportacion de los modulos que se encuentran en la carpeta js y css.
import{buscarPersonaje} from './js/callbacks'
import './styles.css';
//creacion y utilizacion de modulos.

const personajeId= 'naruto';
const personajeId2= 'kakashi';


buscarPersonaje(personajeId, (err , personaje)=>{

    if(err){
        console.error('algo salio mal');
        
    }else{
        console.log(personajeId);
        console.log(personaje);
    }
});



//buscarPersonaje(personajeId, (err , personaje)=>{
//    if(err) {return console.error(err);}
//});

