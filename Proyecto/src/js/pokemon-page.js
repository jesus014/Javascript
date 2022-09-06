import{ObtenerPokemon} from "./http-provider"

const body= document.body;
const minimo= 1;
const maximo=152;
let divtitulo, ulLista;
//<li class="list-group-item">An item</li>
//<li class="list-group-item">A second item</li>
//<li class="list-group-item">A third item</li>
//<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

const crearHtmlPokemon=()=>{
    const html=`
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          
        </div>
        <ul class="list-group list-group-flush">

        </ul>
    `;

    const divPokemon = document.createElement('div');
    divPokemon.classList.add('card');
    //divPokemon.style.add('width: 18rem');
    divPokemon.innerHTML=html;
    body.append(divPokemon);
}




const eventoPoke= async () => {

    divtitulo = document.querySelector('div');
    ulLista = document.querySelector('ul');
    const numeroRandom = Math.floor(Math.random()*(maximo-minimo))+minimo;
    console.log(numeroRandom);

    dibujarPokemon( await ObtenerPokemon(numeroRandom));

}



const dibujarPokemon= async(pokemon) => {
    console.log(pokemon.name);
    console.log(pokemon.base_experience);
    const nombre = pokemon.name
    
    const itemTitle = document.createElement('h5');
    console.log(itemTitle);
    itemTitle.innerHTML=`<b> ${nombre} </b>:  ${nombre}`;
    itemTitle.classList.add('card-title');
    divtitulo.append(itemTitle);
    
}

export const init = ()=>{
    //dibujarPokemon();
    crearHtmlPokemon();
    eventoPoke();
}