const urlCrud='https://reqres.in/api/users';

const getUsuario = async(id ) => {
    const response =await fetch(`${urlCrud}/${id}`);
    const {data}= await response.json();

    return data;
}

const CrearUsuarios = async(usuario) => {
    const response = await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //console.log(await response.json());
    return await response.json();
}

const ActualizarUsuario = async(id,usuario) => {
    const response = await fetch(`${urlCrud}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //console.log(await response.json());
    return await response.json();
}

const EliminarUsuario = async(id) => {
    const response = await fetch(`${urlCrud}/${id}`, {
        method: 'DELETE'
    });

    //console.log(await response.json());
    return (response.ok)?'Borrado':'No se pudo eliminar';

}







export {
    getUsuario,
    CrearUsuarios,
    ActualizarUsuario,
    EliminarUsuario
    
}