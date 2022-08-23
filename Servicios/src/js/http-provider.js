const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios='https://reqres.in/api/users?page=2';

//fetch(jokeUrl).then(response => {
//
//    console.log(response)
//    //si es una promesa se hace con then.
//    response.json().then(data => {
//        console.log(data.value)
//    })
//})


//fetch(jokeUrl)
//    .then(response => response.json())
//    .then(console.log);





    //regresa una promesa
    //peticion http get.
const obtenerChiste = async() => {
    try {
        const response = await fetch(jokeUrl)
    
        if(!response.ok ) throw alert('no se pudo realizar la peticion');

        const {icon_url, id , value} = await response.json();
        
        return {
            icon_url, 
            id ,
            value
        };
            
    } catch (error) {

        throw error;
    }
}


//uso para obtener informacion
const obtenerUsuarios= async( ) => {

    const respuesta =await fetch(urlUsuarios);
    const {data:usuarios} = await respuesta.json();

    console.log(usuarios);

    return usuarios;
}



export{
    obtenerChiste,
    obtenerUsuarios

}