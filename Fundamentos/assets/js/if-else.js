//script referente a las funciones de if y else 

let a =9;

if( a >= 10){ //undifined null, una asignacion.
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 10')
}


console.log('fin del programa');


const hoy = new Date();
let dia =hoy.getDay();

console.log({dia});


if(dia === 0){
    console.log('hoy es domingo');
}else{
    if(dia===1){
        console.log('lunes')
    }else{
        console.log('no es lunes ni domingo');
    }
}


if(dia === 0){
    console.log('hoy es domingo');
}else if(dia===2){
    console.log('Martes')
}else{
    console.log('no es lunes, ni martes');
}

//mediante objetos
dia=3;

const diasLetras={
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado'
}

console.log(diasLetras[dia] || 'dia no valido');

//arreglos
const diasLetras2=['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

console.log(diasLetras2[dia] || 'dia no valido');
