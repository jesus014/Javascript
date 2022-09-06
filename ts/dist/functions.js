"use strict";
//funciones
function greet(name) {
    console.log(`Greetings!, ${name.toUpperCase()}`);
}
greet('jesus');
const ObtenerNombre = (name) => {
    console.log(`Greetings!, ${name.toUpperCase()}`);
};
ObtenerNombre('yisus');
//funcions
function getNumber(numero = 212) {
    return Math.floor(Math.random() * numero);
}
console.log(getNumber());
//se pueden pasar hasta un objeto por la funcion.
function printPosition(position) {
    console.log(`la posicion de latitud es !, ${position.lat} y  longitud es ${position.lon}`);
}
printPosition({ lat: 32, lon: '32' });
