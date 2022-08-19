import {buscarPersonaje2, buscarPersonajeAsync, buscarPersonaje} from './promesas';

const personajesIds =['naruto', 'kakashi','itachi'];

const personajesPromesas=personajesIds.map(id=>buscarPersonaje(id));
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



//uso de await usado en el return

export const ObtenerPersonajesArr2 = async () =>{
    const personajesArr =[];

    for ( const id of personajesIds ){
        
        personajesArr.push(buscarPersonaje2(id));
    }

    return await Promise.all(personajesArr);
}


//uso de await usado en el return

export const ObtenerPersonajesArr3 = async () =>{
    
    return await Promise.all(personajesIds.map(buscarPersonaje2));

}

//uso de try catch
export const obtenerPersonajeAwait = async (id) => {
    try {
        const personaje = await buscarPersonajeAsync(id);
        return personaje;

    } catch (error) {
        return{ 
            nombre:'sin poder',
             apellido:'sin apellido'
        }
    }

};


export const personajesCiclo= async () => {
    console.time('personajesCiclo');

    //const personajes = await Promise.all(personajesPromesas);
    //personajes.forEach(personaje =>console.log(personaje));

    for await(const personaje of personajesPromesas){
        console.log(personaje);
    }

    //console.log(personajes)



    console.timeEnd('personajesCiclo');
}

export const personajeIfAwait= async (id) =>{

    if( (await buscarPersonajeAsync(id).nombre) === 'itachi'){
        console.log('el mejor');

    }else{
        console.log('naa')
    }
}