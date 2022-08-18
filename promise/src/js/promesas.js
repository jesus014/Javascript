const personajes ={
    naruto:{
        nombre:'naruto uzumaki',
        poder:'Rasengan'
    }, 
    kakashi:{
        nombre:'kakashi hatake',
        poder:'Rasengan'
    },
    itachi:{
        nombre:'itachi ',
        poder:'el sharingan'

    }
};

export const buscarPersonaje = (id) => {
    const personaje = personajes[id];


    //cuando se hace correctamente //cuando falla la promesa
    return new Promise( (resolve, reject) => {

        if(personaje){
            resolve(personaje);
        }
        else{
            reject(`no existe un heroe con el id ${id}`);
        }
    });


}