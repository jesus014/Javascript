//declaracion de variables globales
let deck=[];
const tipos=['C','D','H','S'];
const especiales=['A','J','Q','K'];
//esta funcion crea una nueva baraja
let puntosJugador=0,
    puntosComputadora=0;

//referencias de html 
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador= document.querySelector('#jugador-cartas');
const divCartasComputadora= document.querySelector('#computadora-cartas');

const puntosHTML =document.querySelectorAll('small');
//console.log(btnPedir);


//se realiza la creacion del mazo de cartas aleatorio.

const crearDeck = () => {
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
    
    //console.log(deck);
    deck= _.shuffle(deck);
    console.log(deck);
    return deck;
}


crearDeck();

//esta funcion me permite pedir una carta
const pedirCarta= ()=>{
    
    if(deck.length===0){
        throw 'No hay cartas en el deck';
    }

    const carta=deck.pop();
    //console.log(carta); //
    return carta;
}

//pedirCarta();


const valorCarta =(carta) =>{
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

//console.log({valor});
//turno de la computadora
const turnoComputadora=(puntosMinimos)=>{
    do{
        const carta =pedirCarta();
    
        puntosComputadora=puntosComputadora+ valorCarta (carta) ;
        console.log(puntosComputadora);
        puntosHTML[1].innerText=puntosComputadora;
    
        //crear la img deacuerdo con propiedades del DOM
        const imgCarta=document.createElement('img');
        //se le concatena el nombre 
        imgCarta.src=`assets/cartas/${carta}.png`;
        //se agrega la clase css
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);
        if(puntosMinimos>21){
            break;
        }

    }while((puntosComputadora < puntosMinimos)&& (puntosMinimos<21));

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



//eventos
//funcion callback es una funcion que se manda por argumento
//se utiliza una funcion de flecha enves de function


btnPedir.addEventListener('click',()=>{

    const carta =pedirCarta();
    
    puntosJugador=puntosJugador+ valorCarta (carta) ;
    console.log(puntosJugador);
    puntosHTML[0].innerText=puntosJugador;

    //crear la img deacuerdo con propiedades del DOM
    const imgCarta=document.createElement('img');
    //se le concatena el nombre 
    imgCarta.src=`assets/cartas/${carta}.png`;
    //se agrega la clase css
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

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
    turnoComputadora(puntosJugador);


});


btnNuevo.addEventListener('click', ()=>{
    console.clear();
    deck=[];
    deck=crearDeck();
    puntosJugador=0;
    puntosComputadora=0;

    puntosHTML[0].innerText=0;
    puntosHTML[1].innerText=0;

    divCartasComputadora.innerHTML='';
    divCartasJugador.innerHTML='';
    btnPedir.disabled = false;
    btnDetener.disabled = false;

})