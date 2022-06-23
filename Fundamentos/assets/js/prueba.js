//script para poner en practica algunos fundamentos de js.
//variables 
let a=1;
const b = 2;

a=a+b;
console.log(a);

//arregloss

let narutoPersonajes =['naruto', 'sasuke'];
console.log(narutoPersonajes);

//Agrega al arreglo.
narutoPersonajes.push('itachi');
console.log(narutoPersonajes);
//elimina el ultimo del algoritmo
narutoPersonajes.pop();
console.log(narutoPersonajes);


//funciones 
const mostrarPersonajes = () =>{
    console.log('hola ');
}

mostrarPersonajes();

const mostrarPersonajes2=(nombre, apellido)=>(console.log(nombre));
mostrarPersonajes2('gara','itachi')

//objetos

let narutoPersonaje ={
    nombre:'naruto',
    apellido:'uzumaki',
    edad:20
}
console.log(narutoPersonaje)

//if
let estaVivo= false;

if(estaVivo ===true){
    console.log('esta vivo')
}else{
    console.log('esta muerto')
}

//for
for(let i=0; i<narutoPersonajes.length; i++){
    console.log(narutoPersonajes[i]);
}

//swich

let personaje='sasuke';

switch (personaje) {
    case 'sasuke':
        console.log("este es el bueno")
        break;

    default:
        break;
}