//metodos principales para arreglos.

//Arreglo principal
let personajes=['naruto', 'sasuke', 'gara', 'hinata'];

//metodo length se utiliza para saber el tamaño del arreglo
console.log(personajes);
console.log('largo', personajes.length);

//se puede saber la posicion de un arreglo con corchetes
let primero=personajes[0];
let ultimo = personajes[personajes.length - 1];
console.log({primero, ultimo});

//se puede saber el elemento indice arr.
personajes.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});

//se puede agregar  a el elemento con la propiedad push
let nuevaLonguitud= personajes.push('itachi');
console.log(nuevaLonguitud);

////se puede agregar a el elemento en la posicion [0] con la propiedad 
//unshift pasando el valor que se desea agregar.
 nuevaLonguitud = personajes.unshift('kakashi');
 console.log({personajes,nuevaLonguitud});

//se puede eliminar el  ultimo elemento con la propiedad pop 
 let personajeBorrado= personajes.pop();
 console.log(personajeBorrado);


console.log(personajes);

let pos=1;
let personajesBorrados= personajes.splice(pos, 2);

//se puede saber el index de un elemento del arreglo con la 
//propiedad indexOf y pasando el valor que queremos. 
let garaIndex= personajes.indexOf('gara'); //casesensitive
console.log(garaIndex);

