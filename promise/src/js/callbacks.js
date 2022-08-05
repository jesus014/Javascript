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

//el callback regresa un heroe
export const buscarPersonaje = (id , callback) => { 
    
    const personaje= personajes[id];

    if(personaje){
        callback(null, personaje);

    }else{

        //console.error;
        //estandar de que el primer parametro es un error
        callback(`no existe un heroe con el id ${id}`);
    }

    //es una simple funcion
    //callback(personaje)

}