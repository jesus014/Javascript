const personajes =['naruto', 'kakashi','gara'];

console.warn('for tradicional');


for(let i=0; i < personajes.length; i++) {

    console.log(personajes[i]);
    
}

console.warn('for in');

//se encarga de las iteraciones.
for (let i in personajes) {
    console.log(personajes[i]);
}

console.warn('for on');

for (let personaje of personajes) {
    console.log(personaje);
}
