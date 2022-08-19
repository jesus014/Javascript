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

//
export const buscarPersonaje2 = (id) => {
    const personaje = personajes[id];


    //cuando se hace correctamente //cuando falla la promesa
    return new Promise( (resolve, reject) => {

        if(personaje){
            setTimeout(() => resolve(personaje) ,1000);
        }
        else{
            reject(`no existe un heroe con el id ${id}`);
        }
    });


}


//forma con async

export const buscarPersonajeAsync = async (id) => {
    const personaje = personajes[id];


    //cuando se hace correctamente //cuando falla la promesa
        if(personaje){
            return personaje;
        }
        else{
            throw `no existe un heroe con el id ${id}`;
        }

}






 const promersaLenta= new Promise((resolve, reject) =>{
    setTimeout(() => resolve('promersaLenta'),2000);
});

 const promersaMedia= new Promise((resolve, reject) =>{
    setTimeout(() => resolve('promersaMedia'),1500);
});

 const promersaRapida= new Promise((resolve, reject) =>{
    setTimeout(() => resolve('promersaRapida'),1000);
});

//diferente manera de exportar archivos.
export{
    promersaRapida,
    promersaMedia,
    promersaLenta
}

