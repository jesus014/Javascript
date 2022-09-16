const urlApi ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3740a4b680c1a246b4b5cbfc0af9df00&hash=66ab84f321cd15d9cbe542f685b37803';

const ObtenerPersonajesMarvel= async() => {
    try {
        const response = await fetch(urlApi);
        const responseJson =await response.json();

        return await responseJson;
        
        
    } catch (error) {

        throw error;
        
    } 
}

export {

    ObtenerPersonajesMarvel
}