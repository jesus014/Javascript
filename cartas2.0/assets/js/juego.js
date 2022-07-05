

//se utiliza una funcion anonima
const miModulo=(() =>{
    'use strict';
    //const personajes =['naruto', 'kakashi','gara'];
    //console.log(personajes);

//declaracion de variables globales
let deck=[];
const tipos=['C','D','H','S'],
      especiales=['A','J','Q','K'];

//esta funcion crea una nueva baraja
let puntosJugador=0,
    puntosComputadora=0;

let puntosJugadores=[];

//referencias de html 
const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores=document.querySelectorAll('.divCartas'),
      puntosHTML =document.querySelectorAll('small');
//console.log(btnPedir);

//esta funcion inicializa el juego
const inicializarJuego=(numJugadores = 2)=>{
    deck= crearDeck();
    puntosJugadores=[];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);        
    }    
    puntosHTML.forEach(elem =>elem.innerText =0);
    divCartasJugadores.forEach(elem =>elem.innerHTML =0);
    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

//se realiza la creacion del mazo de cartas aleatorio.
const crearDeck = () => {
    deck=[];

    for(let i=2 ; i <= 10; i++){
        //deck.push(i+'C');
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    };
    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo);
        }
    }
    return _.shuffle(deck);
}


//crearDeck();


//esta funcion me permite pedir una carta
const pedirCarta= ()=>{
    
    if(deck.length===0){
        throw 'No hay cartas en el deck';
    }
    //console.log(carta); //
    return deck.pop();
}

const valorCarta = (carta) => {
    const valor=carta.substring(0, carta.length-1);
    // let puntos=0;
    console.log(valor);
    return (isNaN (valor) ) ?
            (valor === 'A') ? 11 : 10
            :valor * 1;
                //logica que fue sustituida por operadores ternarios
               //evalua si es un numero isNaN
              // if(isNaN(valor)){
               //
              //     console.log('no es un numero')
              //     puntos =(valor === 'A' ) ? 11 : 10;
              // }else {
                  //     
              //     console.log(' es un numero')
              //     puntos = valor * 1;
              // }
              // console.log(puntos);

}
//se obtiene el valor de la carta para que se pueda utilizar al momento de que se llama
//const valor= valorCarta(pedirCarta());

//turno:0 primer jugador y el ultimo sera la computadora

const acumularPuntos=(carta,turno)=>{
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta (carta) ;
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}

const crearCarta=(carta,turno)=>{
    const imgCarta=document.createElement('img');
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
};


const determinarGanador=()=>{
    const [puntosMinimos,puntosComputadora] = puntosJugadores;
    setTimeout(()=>{
        if(puntosComputadora===puntosMinimos){
            alert("nadie gana");
        }else if(puntosMinimos>21){
            alert('computadora gana');
        }else if(puntosComputadora>21){
            alert('jugador gana');
        }else{
            alert('computadora gana');
        }
    },10);
}



//console.log({valor});
//turno de la computadora
const turnoComputadora=(puntosMinimos)=>{
    let puntosComputadora=0;
    do{
        const carta =pedirCarta();
        acumularPuntos(carta,puntosJugadores.length -1);
        
        //crear la img deacuerdo con propiedades del DOM
        crearCarta(carta,puntosJugadores.length -1);



    }while((puntosComputadora < puntosMinimos)&& (puntosMinimos<= 21));
    determinarGanador();
  
}



//eventos
//funcion callback es una funcion que se manda por argumento
//se utiliza una funcion de flecha enves de function


btnPedir.addEventListener('click',()=>{

    const carta =pedirCarta();
    const puntosJugador= acumularPuntos(carta,0);  
    crearCarta(carta,0);


    if(puntosJugador > 21){
        
        console.warn('lo siento perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    }else if(puntosJugador === 21){
        
        console.warn(' 21');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

});


btnDetener.addEventListener('click', ()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
    

});


btnNuevo.addEventListener('click', ()=>{
    inicializarJuego();
})

return {
    nuevoJuego: inicializarJuego
};

})();