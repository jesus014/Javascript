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
        <div class="card-body">
          <div>
          
          </div>
        </div>
        <ul class="list-group list-group-flush">

        </ul>
    `;

    const divPokemon = document.createElement('div');
    divPokemon.classList.add('card');
    //divPokemon.style.add('width: 18rem');
    divPokemon.innerHTML=html;
    body.append(divPokemon);

    //imgFoto=document.querySelector('#foto');
}




const eventoPoke= async () => {

    divtitulo = document.querySelector('div');
    ulLista = document.querySelector('ul');
    const numeroRandom = Math.floor(Math.random()*(maximo-minimo))+minimo;
    console.log(numeroRandom);

    dibujarPokemon( await ObtenerPokemon(numeroRandom));

}



const dibujarPokemon= async(pokemon) => {

    const nombre = pokemon.name
    const foto= pokemon.img;
    const experiencia =pokemon.base_experience;
    const hp =pokemon.hp;
    const ataque = pokemon.ataque;
    const defensa=pokemon.defensa;

    const itemTitle = document.createElement('div');
    console.log(itemTitle);
    itemTitle.innerHTML=`<b> Nombre del Pokemon </b>:  ${nombre} <br>
                         <b>Experiencia: </b> ${experiencia}  <b>Vida: </b> ${hp} Px  <br>
                         <b>Ataque: </b> ${ataque}  <b>defensa: </b> ${defensa} Puntos  <br>

    `;
    
    itemTitle.classList.add('card-title');
    itemTitle.classList.add('center');
    divtitulo.append(itemTitle);
    

    const itemImg =document.createElement('div');
    console.log(itemImg);
    itemImg.innerHTML=`<img src="${foto}" class="card-img-top" alt="..." id="foto">`
    itemImg.classList.add('card-img-top');
    divtitulo.append(itemImg);
}

export const init = ()=>{
    //dibujarPokemon();
    crearHtmlPokemon();
    eventoPoke();
}