import {buscarPersonajeAsync} from './promesas';

const personajesIds =['naruto', 'kakashi','itachi'];

//uso de await hasta que se resuelve la promesa

export const ObtenerPersonajesArr = async () =>{
    const personajesArr =[];

    for ( const id of personajesIds ){
        
        const personaje =await buscarPersonajeAsync(id);

        personajesArr.push(personaje);
    }

    //setTimeout(() =>{
    //    console.log('obtener personajes')
    //    console.table(personajesArr)
    //},1000);

    return personajesArr;
}