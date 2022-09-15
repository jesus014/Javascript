const urlApi ='https://pokeapi.co/api/v2/pokemon';


const ObtenerPokemon= async(pokeid) => {
    try {
        const response = await fetch(`${urlApi}/${pokeid}`);
        const responseJson =await response.json();
        console.log(responseJson);
        //const nombre= responseJson.name;

        const pokemonObj = {
            name: responseJson.name,
            base_experience:responseJson.base_experience,
            img: responseJson.sprites.other.dream_world.front_default

        }
        console.log(pokemonObj);
        return await pokemonObj;
        
        
    } catch (error) {
        throw error;
    } 
}

export {

    ObtenerPokemon
}