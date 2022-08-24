const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios='https://reqres.in/api/users?page=2';
//cloudinary
const cloudPresent='aa8oxh9x'
const cloudUrl= 'https://api.cloudinary.com/v1_1/dokrrprqh/upload';
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

//archivosSubir
const subirImagen= async(archivoSubir)=>{

    const formData= new FormData();
    formData.append('upload_preset',cloudPresent);
    formData.append('file',archivoSubir);

    try {
        const response = await fetch(cloudUrl , {
            method: 'POST',
            body:formData
        });

        if(response.ok){

            const cloudResponse= await response.json();
            console.log(cloudResponse);
            return cloudResponse.secure_url;

        }else{
            throw await response.json();
        }
        
    } catch (error) {
        throw error;

        
    }

}



export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen

}