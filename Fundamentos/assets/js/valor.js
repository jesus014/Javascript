//valores primitivos 
let a=10;
let b=a;
a=30;

console.log({a,b});

//objeto literal, objeto todo pasando por referencia.
let jesus={nombre:'jesus'};

let mariela={...jesus};

mariela.nombre='mariela';

console.log({juan ,mariela});


const cambiaNombre=({...persona})=>{
    persona.nombre='naruto';
    return persona;
}

let sasuke = {nombre:'sasuke'};
let tony=cambiaNombre(sasuke);

console.log({sasuke,tony});

//arreglos

const frutas=['manzana', 'pera','piña'];


const otrasFrutas=[...frutas];
otrasFrutas.push('mangocush')


console.table({frutas,otrasFrutas});