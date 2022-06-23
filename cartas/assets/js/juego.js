
console.log('hola')
let deck=[];
const tipos=['C','D','H','S'];
const especiales=['A','J','Q','K'];
//esta funcion crea una nueva baraja
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
    console.log(carta); //
    return carta;
}

pedirCarta();