import{ObtenerPersonajesMarvel} from "./http-provider"

const eventoAvenger= async () => {

    dibujarAvenger( await ObtenerPersonajesMarvel());

}

const dibujarAvenger= async(personaje) => {

    const container = document.querySelector('#marvel-row');
    console.log(personaje);
    let contentHTML ='';

    for(const hero of personaje.data.results){

        let urlHero = hero.urls[1].url;
        contentHTML += `
        <div class="col-md-4">
            <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
            </a>
            <h3 class="title"> ${hero.name} </h3> 
        </div> `;
    }
    
     container.innerHTML = contentHTML;

    

}

export const init = ()=>{
    eventoAvenger();
}