const personajes =['naruto', 'kakashi','gara'];

let i=0;
console.warn('while');

//la condicion debe de ser verdadera. 
while (i < personajes.length) {
    console.log(personajes[i]);
    i++;
}

console.warn('do while');
let j=0;

do{
    console.log(personajes[j]);
    j++;
}while( personajes[j]);