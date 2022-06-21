// formas de crear funciones.

function saludar(){
    console.log('hola ');
    
}

//funcion anonima.
const saludar2 = function(nombre){
    console.log(arguments);
    console.log('adios' + nombre);
    //funciones de return 

    return 10;
}


function saludar3(nombre){
    console.log('hola ' + nombre);
}


saludar3('jesus');

//funciones argumentos

saludar2('jesus',40,true)


//funciones de flecha o funciones lambda.

const saludarFlecha = ()=> {
    console.log('hola desde funcion flecha');
}

const saludarFlecha2 = (nombre)=> {
    console.log('hola desde funcion flecha,' + nombre);
}

const retornoDeSaludar = saludar2('jesus',40,true);
console.log(retornoDeSaludar);

saludarFlecha();
saludarFlecha2('yisus');


function sumar(a,b){
    return a + b;
}

const sumar2= (a,b) => {
    return a + b;
};

//solo se aplica si es un return.
const sumar3= (a,b) =>  a + b;

console.log(sumar(5,8));

console.log(sumar3(51,8));


function getAleatorio(){
    return Math.random();
};
const getAleatorio2=() => Math.random();

console.log(getAleatorio());

console.log(getAleatorio2());