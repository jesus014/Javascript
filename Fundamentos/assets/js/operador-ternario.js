
const dia = 1; //0 :domingo
const horaActual=10;

let horaApertura;
let mensaje; //esta abierto o esta cerrado.

if(dia === 0 || dia===6){
    console.log('es fin de semana');
    horaApertura =9;
}else{
    console.log('Dia en la semana');
    horaApertura =11;
}

if(horaActual>=horaApertura){
    mensaje ='esta abierto'
}else{
mensaje ='esta cerrado, hoy abrimos a las '
}

console.log({horaApertura, mensaje});

//includes, si se encuentra en el arreglo regresa un true
if([0,6].includes[dia]){
    console.log('es fin de semana');
    horaApertura =9;
}else{
    console.log('Dia en la semana');
    horaApertura =11;
}

if(horaActual>=horaApertura){
    mensaje ='esta abierto'
}else{
mensaje ='esta cerrado, hoy abrimos a las '
}
console.log({horaApertura, mensaje});


//uso de operador ternario
horaApertura =([0,6].includes[dia]) ? 9:11;

if(horaActual>=horaApertura){
    mensaje ='esta abierto'
}else{
mensaje ='esta cerrado, hoy abrimos a las '
}
mensaje=(horaActual>=horaApertura)?'esta abierto':'esta cerrado, hoy abrimos a las '

console.log({horaApertura, mensaje});
